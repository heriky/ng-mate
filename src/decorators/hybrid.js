import React from 'react';
import ReactDOM from 'react-dom';
import injector from 'angular-es-utils/injector';

// 内部向外部的通讯，使用回调函数
// 外部向内部的通讯，使用双向绑定，属性改变的时候，触发rerender

// const config = {
//     el: '', // 需要唯一，做验证。 document.querySelectorAll()生成的数组，只能是一个元素。
//     props: [],
//     render(ctx) {
//         // 传入的是目标实例，这个render在constructor最后调用
//         return <div>啦啦啦, 测试react</div>;
//     }
// };

let timeout = null;

export default function MixRender(config) {
	return originTarget => {
		let { el, render, props } = config;
		if (typeof el !== 'string' && !(el instanceof HTMLElement)) throw new Error('请传入dom对象，或者css选择器字符串！');
		if (typeof el === 'string' && document.querySelectorAll(el).length > 1) throw new Error('请确认容器的唯一性！');

		if (!Array.isArray(props)) throw new Error('props应该传入字符串数组');

		const newTarget = new Proxy(originTarget.prototype.constructor, {
			construct(target, args) {
				// 1. 生成原来的对象
				const obj = Reflect.construct(target, args);
				timeout = obj._$timeout || (injector.get('$timeout'));

				// 2. 获取挂载点
				let container = typeof el === 'string' ? document.querySelector(el) : el;
				if (container == null) throw new Error('错误的挂载节点，请检查el配置');

				// 3. 监听属性变化, 进行rerender
				const proxyObj = observeByProxy(obj, config, container);
				// const proxyObj = observeByDefine(obj, config, container);
				// 3. 渲染React相关
				reRender(render, proxyObj, container);

				return proxyObj;
			}
		});
		return newTarget; // 如果返回的是一个对象的话，则表示替换
	};
}

function reRender(renderFn, ctx, container) {
	timeout(() => {
		let jsx = renderFn(ctx);
		ReactDOM.render(jsx, container);
	});
}


// 这种方法最大的问题就是，递归调用栈爆炸
function observeByDefine(obj, config, container) {
	const { render, props } = config;
	props.forEach(key => {
		let value = obj[key];
		Object.defineProperty(obj, key, {
			enumerable: true,
			configurable: false,
			set(v) {
				value = v;
				// rerender
				Reflect.getPrototypeOf(obj)[key] = value;
				reRender(render, obj, container);
			},
			get() {
				return value;
			}
		});
	});
	return obj;
}


function observeByProxy(obj, config, container) {
	const { render, props } = config;
	const proxyObj = new Proxy(obj, {
		set(target, propKey, value, receiver) {
			target[propKey] = value;
			if (props && props.length > 0 && !(props.includes(propKey))) {
				// 如果设置了监听列表，且不在监听列表中，不进行reRender
				return true;
			}
			// rerender
			reRender(render, proxyObj, container);

			return true;
		},
		get(target, propKey, receiver) {
			const v = target[propKey];
			if (typeof v !== 'function') {
				return v;
			}
			return v.bind(proxyObj); // 函数统一绑定上下文
		}
	});
	return proxyObj;
}

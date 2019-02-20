
// 单例工厂
function singleTonFactory(Fn) {
	let instance = null;
	return function() {
		return instance || (instance = new Fn());
	};
}

function isObject(a) {
	return Object.prototype.toString.apply(a) === '[object Object]';
}

export default function mixins(Clz) {
	if (typeof Clz !== 'function' && !isObject(Clz) && !Array.isArray(Clz)) {
		throw new Error('只能传入类、实例对象或者他们的类数组😳');
	}

	const mixClz = Array.isArray(Clz) ? Clz : [Clz];
	return target => {
		// 复制实例属性，方法
		// 复制protoype属性，方法
		for (let C of mixClz) {
			const obj = isObject() ? C : singleTonFactory(C)();
			copyProps(target.prototype, obj);
			copyProps(target.prototype, C.prototype);
		}
	};
}

function copyProps(target, source) {
	for (let key of Reflect.ownKeys(source)) {
		if (['__proto__', 'constructor'].includes(key)) continue; // 特殊属性不复制
		if (target[key] !== undefined) continue; // 不覆盖目标类的属性
		target[key] = source[key];
	}
}

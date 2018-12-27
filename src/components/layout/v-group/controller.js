import GroupBase from '../base/base-controller';
import {Inject} from 'angular-es-utils';
// import Component from '../../../sdk/utils/easy-component';
// import templateUrl from '../base/template.html';

// @Component({
//   name: 'vGroup',
//   templateUrl,
//   bindings: {
//     vAlign: '@?', // 垂直对齐
//     hAlign: '@?', // 水平对齐
//     styleObj: '<?', // 自定义样式
//     className: '@', // 自定义类
//     gap: '<?' // 内间距
//   },
//   transclude: true
// })
@Inject('$transclude', '$element', '$compile', '$scope')
export default class VGroup extends GroupBase {

  		constructor(transclude, element, compile, scope) {
    		super(transclude, element, compile, scope);
  }

  // @override
  		handleStyle(e) {
    		this.styleObj = this.styleObj || {};
    		this.vAlign && (this.styleObj.justifyContent = this.vAlign);
    		this.hAlign && (this.styleObj.alignItems = this.hAlign);
  }

  // @override
  		handleClassName() {
    		this.mixedClassName = this.className ? `__vgroup ${this.className}` : '__vgroup';
  }

  // @override
  		setGap(element, gap) {
    		if (element.style.marginBottom) {
      		return;
    }
    		element.style.marginBottom = gap + 'px';
  }
}

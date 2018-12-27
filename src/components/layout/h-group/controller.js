import GroupBase from '../base/base-controller';
import {Inject} from 'angular-es-utils';

@Inject('$transclude', '$element', '$compile', '$scope')
export default class HGroup extends GroupBase {
  constructor(transclude, element, compile, scope) {
    super(transclude, element, compile, scope);
  }

  // @override
  handleClassName() {
    this.mixedClassName = this.className ? `__hgroup ${this.className}` : '__hgroup';
  }
}

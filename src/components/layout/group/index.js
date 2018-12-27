import angular from 'angular';

import template from '../base/template.str.html';
import controller from './controller';

const componentOpts = {
  controller,
  template,
  bindings: {
    vAlign: '@?', // 垂直对齐
    hAlign: '@?', // 水平对齐
    styleObj: '<?', // 自定义样式
    className: '@', // 自定义类
    gap: '<?' // 内间距
  },
  transclude: true
};

export default angular
  .module('mate.components.ui.Group', [])
  .component('group', componentOpts)
  .name;

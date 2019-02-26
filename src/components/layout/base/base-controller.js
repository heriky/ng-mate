export default class GroupBase {

  constructor(transclude, element, compile, scope) {
    this._$transclude = transclude;
    this._$element = element;
    this._$compile = compile;
    this._$scope = scope;
  }

  $onInit() {
    this.validateProps();
    this.handleStyle();
    this.handleClassName();

    this.gap && this.handleGap();
  }

  $onChanges() {
    this.$onInit();
  }

  // @override
  handleStyle() {
    this.styleObj = this.styleObj || {};
    this.vAlign && (this.styleObj.alignItems = this.vAlign);
    this.hAlign && (this.styleObj.justifyContent = this.hAlign);
  }

  // @override
  handleClassName() {
    this.mixedClassName = this.className ? `__group ${this.className}` : '__group';
  }

  handleGap() {
    const wrapper = this._$element[0].firstChild;
    wrapper.style.display = 'none'; // 防止布局闪动

    // 等待真实dom渲染结束
    setTimeout(() => {
      const gap = this.gap;
      const originElements = this._$element[0].firstChild.children;

      // 除了最后一个元素，其余都通过设置margrin-right来实现gap效果
      Array.from(originElements).slice(0, -1).forEach(element => {
        this.setGap(element, gap);
      });
      wrapper.style.display = 'flex';
    });
  }

  // @override
  setGap(element, gap) {
    // 不覆盖原有的marginRight样式，保留多样化
    if (element.style.marginRight) {
      return;
    }
    element.style.marginRight = gap + 'px';
  }

  // @override
  // genGapElement(gap) {
  //   const gapElement = document.createElement('t');
  //   gapElement.style.cssText = `margin-right: ${gap}px`;
  //   return gapElement;
  // }

  // createGapElement(gap, originElements) {
  //   const elements = [].filter.call(originElements, node => node.nodeType === 1); // 抽离elemnt类型
  //   const gapElement = this.genGapElement(gap);

  //   let elementsWithGap = elements.reduce((rs, element) => {
  //     return [...rs, element, gapElement];
  //   }, []);
  //   // 去除最后一个元素后的gapElement
  //   return elementsWithGap.slice(0, -1);
  // }

  validateProps() {
    const { vAlign = '', hAlign = '', styleObj = {}, className = '', gap = 0 } = this;
    if (typeof vAlign !== 'string') {
      throw new Error('v-align属性必须为string类型');
    }
    if (typeof hAlign !== 'string') {
      throw new Error('h-align属性必须为string类型');
    }
    if (typeof className !== 'string') {
      throw new Error('className属性必须为string类型');
    }
    if (Object.prototype.toString.call(styleObj) !== '[object Object]') {
      throw new Error('style-obj属性必须为Object类型');
    }
    if (typeof gap !== 'number') {
      throw new Error('gap属性必须为number类型');
    }
  }
}

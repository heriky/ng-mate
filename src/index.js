import angular from 'angular';

import components from './components';
import { Mixins } from './decorators';
import { getByProps, setByProps } from './utils';

const mateComponents = angular.module('mate.components', [components]);

const version = require('./package.json').version;

export default mateComponents.name;

export {
    Mixins,
    getByProps, setByProps
};

export { version };


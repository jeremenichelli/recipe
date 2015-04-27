/*!
 * PROJECT_NAME - v1.0.0
 * https://github.com/jeremenichelli/PROJECT_NAME
 * (c) Jeremias Menichelli - MIT License
*/

(function (root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.PROJECT_NAME = factory(root);
    }
})(this, function () {
    // do something here

    return {};
});
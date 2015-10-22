(function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.PROJECT_NAME = factory(root);
    }
})(this, function() {
    'use strict';
    // do something here

    return {};
});

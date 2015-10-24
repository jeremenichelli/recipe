// karma.conf.js
module.exports = function(config) {
    config.set({
        files: [ '../src/project_name.js', '../test/project_name.spec.js' ],
        browsers: [ 'PhantomJS' ],
        frameworks: [ 'jasmine' ],
        reporters: [ 'spec' ]
    });
};
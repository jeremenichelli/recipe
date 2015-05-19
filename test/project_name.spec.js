(function(root) {
    'use strict';

    describe('Primary access', function() {
        it('PROJECT_NAME available in global scope', function() {
            expect(typeof root.PROJECT_NAME).toBe('object');
        });
    });
})(this);

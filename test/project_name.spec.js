import { init, num } from '../src/project_name.js'

describe('Testing es6 module', () => {
	it('init should return test string', () => {
		let str = init();

		expect(str).toEqual('test');
	});
	it('num should be a number', () => {
		expect(num).toEqual(123);
	});
});

import { Parseley } from '../parseley';
import * as chai from 'chai';
const assert = chai.assert;

describe('parse function', () => {
    let parseley: Parseley = null;
    it('when inner variant setup, add a target string and position.', () => {
        parseley = new Parseley().parse('parse string', 0);
        assert.strictEqual(parseley.success, true);
        assert.strictEqual(parseley.result[0], '');
        assert.strictEqual(parseley.newPosition, 0);
        assert.strictEqual(parseley.targetString, 'parse string');
    });
    it('Inner variant no setup.', () => {
        parseley = new Parseley().parse('', 0);
        assert.strictEqual(parseley.success, false);
        assert.strictEqual(parseley.result[0], '');
        assert.strictEqual(parseley.newPosition, 0);
        assert.strictEqual(parseley.targetString, '');
    });
});
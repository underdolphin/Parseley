//    Copyright 2016 underdolphin(masato sueda)
// 
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
// 
//        http://www.apache.org/licenses/LICENSE-2.0
// 
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

import { Parseley as $ } from '../parseley';
import * as chai from 'chai';
const assert = chai.assert;

describe('constructor', () => {
    let parseley: $ = null;
    it('when inner variant setup, add a target string and position.', () => {
        parseley = new $('parse string', 0);
        assert.strictEqual(parseley.success, true);
        assert.strictEqual(parseley.result, null);
        assert.strictEqual(parseley.newPosition, 0);
        assert.strictEqual(parseley.targetString, 'parse string');
    });
    it('Inner variant no setup.', () => {
        parseley = new $('', 0);
        assert.strictEqual(parseley.success, false);
        assert.strictEqual(parseley.result, null);
        assert.strictEqual(parseley.newPosition, 0);
        assert.strictEqual(parseley.targetString, '');
    });
});

describe('Function to generate parser for simple string', () => {
    it('Setup single target', () => {
        const parseley: $ = new $('foobar', 0).token('foobar');
        assert.strictEqual(parseley.success, true);
        assert.strictEqual(parseley.result.pop(), 'foobar');
        assert.strictEqual(parseley.newPosition, 6);
        assert.strictEqual(parseley.targetString, 'foobar');
    });
    it('not setup target', () => {
        const parseley: $ = new $('foobar', 0).token('');
        assert.strictEqual(parseley.success, false);
        assert.strictEqual(parseley.result, null);
        assert.strictEqual(parseley.newPosition, 0);
        assert.strictEqual(parseley.targetString, 'foobar');
    });
});
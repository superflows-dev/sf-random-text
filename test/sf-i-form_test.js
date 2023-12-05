/**
 * @license
 * Copyright 2022 Superflows.dev
 * SPDX-License-Identifier: MIT
 */
import { SfRandomText } from '../sf-random-text.js';
// import { stub } from 'sinon';
// import {fixture, assert} from '@open-wc/testing';
import { assert } from '@open-wc/testing';
// import {html} from 'lit/static-html.js';
//const TIMEOUT = 2000;
suite('sf-random-text > left menu', () => {
    test('is defined', () => {
        const el = document.createElement('sf-random-text');
        assert.instanceOf(el, SfRandomText);
    });
});
//# sourceMappingURL=sf-random-text_test.js.map
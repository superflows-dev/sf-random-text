/**
 * @license
 * Copyright 2022 Superflow.dev
 * SPDX-License-Identifier: MIT
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
//import {customElement, query, queryAssignedElements, property} from 'lit/decorators.js';
//import {SfISelect} from 'sf-i-select';
//import {SfISubSelect} from 'sf-i-sub-select';
import { customElement, property } from 'lit/decorators.js';
// import {LitElement, html, css} from 'lit';
// import {customElement} from 'lit/decorators.js';
/*

Modes: View, Add, Edit, Delete, Admin
DB: partitionKey, rangeKey, values

*/
/**
 * SfRandomText element.
 * @fires renderComplete - When the list is populated
 * @fires valueChanged - When the value is changed
 * @property apiId - backend api id
 * @property label - input label
 * @property name - name of the input
 * @property mode - mode of operation
 * @property selectedId - id to preselect
 * @property selectedValue - callback function
 */
let SfRandomText = class SfRandomText extends LitElement {
    constructor() {
        super();
        this.getTexts = () => {
            return JSON.parse(this.texts);
        };
        this.loadMode = async () => {
            const len = this.getTexts().length;
            this.index = parseInt(Math.random() * 100 + "") % len;
            console.log('index ' + this.index);
        };
    }
    firstUpdated(_changedProperties) {
        this.loadMode();
    }
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return html `
      <div class="SfRandomTextC" part="text">
        ${this.getTexts()[this.index]}
      </div>

    `;
    }
};
SfRandomText.styles = css `
    
    .SfRandomTextC {
      
    }

  `;
__decorate([
    property()
], SfRandomText.prototype, "texts", void 0);
__decorate([
    property()
], SfRandomText.prototype, "index", void 0);
SfRandomText = __decorate([
    customElement('sf-random-text')
], SfRandomText);
export { SfRandomText };
//# sourceMappingURL=sf-random-text.js.map
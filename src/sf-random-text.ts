/**
 * @license
 * Copyright 2022 Superflow.dev
 * SPDX-License-Identifier: MIT
 */

import {LitElement, html, css, PropertyValueMap} from 'lit';
//import {customElement, query, queryAssignedElements, property} from 'lit/decorators.js';
//import {SfISelect} from 'sf-i-select';
//import {SfISubSelect} from 'sf-i-sub-select';
import {customElement, property} from 'lit/decorators.js';
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
@customElement('sf-random-text')
export class SfRandomText extends LitElement {

  @property()
  texts!: string;

  @property()
  index!: number;

  getTexts = () => {
    return JSON.parse(this.texts)
  }

  static override styles = css`
    
    .SfRandomTextC {
      
    }

  `;

  loadMode = async () => {

    const len = (this.getTexts() as Array<string>).length;
    this.index = parseInt(Math.random()*100 + "")%len;

    console.log('index ' + this.index);

  }

  constructor() {
    super();
  }

  protected override firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {

    this.loadMode();

  }
  
  override connectedCallback() {
    super.connectedCallback()
  }
  
  override render() {

    return html`
      <div class="SfRandomTextC" part="text">
        ${this.getTexts()[this.index]}
      </div>

    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'sf-random-text': SfRandomText;
  }
}

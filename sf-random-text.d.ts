/**
 * @license
 * Copyright 2022 Superflow.dev
 * SPDX-License-Identifier: MIT
 */
import { LitElement, PropertyValueMap } from 'lit';
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
export declare class SfRandomText extends LitElement {
    texts: string;
    index: number;
    getTexts: () => any;
    static styles: import("lit").CSSResult;
    loadMode: () => Promise<void>;
    constructor();
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sf-random-text': SfRandomText;
    }
}
//# sourceMappingURL=sf-random-text.d.ts.map
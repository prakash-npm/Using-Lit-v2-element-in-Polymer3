/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';

 /**
  * An example element.
  *
  * @fires count-changed - Indicates when the count changes
  * @slot - This element has a slot
  * @csspart button - The button
  */
 export class MySample extends LitElement {
   
   static styles = 
      css`
       :host {
         display: block;
         border: solid 8px gray;
         padding: 16px;
         max-width: 800px;
       }
     `;

// static get styles() {
//     return  css`
//     :host {
//       display: block;
//       border: solid 8px gray;
//       padding: 16px;
//       max-width: 800px;
//     }
//   `;
//   }
   
 
//    static get properties() {
//     return {
//         name: {type: String},
//         count: {type: Number}
//     }
// }

   static properties = {
       name: {type: String},
       count: {type: Number}    
   }
 
   constructor() {
     super();
     this.name = 'World';
     this.count = 0;
   }
 
   render() {
     return html`
       <h1>${this.sayHello(this.name)}!</h1>
       <button @click=${this._onClick} part="button">
         Click Count: ${this.count}
       </button>
       <slot></slot>
     `;
   }
 
   _onClick() {
     this.count+= 2;
     this.dispatchEvent(new CustomEvent('count-changed'));
   }
 
   /**
    * Formats a greeting
    * @param name {string} The name to say "Hello" to
    * @returns {string} A greeting directed at `name`
    */
   sayHello(name) {
     return `Hello, ${name}`;
   }
 }
 
 window.customElements.define('my-sample', MySample);
 
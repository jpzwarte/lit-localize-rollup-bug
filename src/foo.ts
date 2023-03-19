import type { TemplateResult } from 'lit';
import { localized, msg } from '@lit/localize';
import { LitElement, html } from 'lit';

export const bar = msg('HELLO WORLD');

@localized()
export class Foo extends LitElement {
  override render(): TemplateResult {
    return html`${msg('HELLO WORLD')}`;
  }
}

customElements.define('x-foo', Foo);

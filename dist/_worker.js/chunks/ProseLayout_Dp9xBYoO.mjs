globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, g as renderSlot } from './astro_B8nBHHeA.mjs';
import './kleur_DHimoS-P.mjs';
import { $ as $$DocsLayout } from './DocsLayout_Dlb3fAOV.mjs';

const $$Astro = createAstro();
const $$ProseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProseLayout;
  return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="prose prose-neutral prose-h1:text-black prose-a:text-black pb-20 prose-invert text-black"> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/layouts/ProseLayout.astro", void 0);

export { $$ProseLayout as $ };

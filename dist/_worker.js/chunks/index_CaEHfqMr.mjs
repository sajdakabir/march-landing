globalThis.process ??= {}; globalThis.process.env ??= {};
import './@astrojs_tZBGB29K.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro } from './astro_B8nBHHeA.mjs';
import './kleur_DHimoS-P.mjs';
import { $ as $$ProseLayout } from './ProseLayout_Dp9xBYoO.mjs';
import { a as getEntry } from './DocsLayout_Dlb3fAOV.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { collection, slug } = Astro2.params;
  const entry = await getEntry(collection, slug);
  if (!entry) {
    return Astro2.redirect("/");
  }
  Astro2.response.headers.set(
    "Cache-Control",
    "public, max-age=3600, s-maxage=3600, stale-while-revalidate=3600"
  );
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "ProseLayout", $$ProseLayout, { "title": entry.data.title, "description": entry.data.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/pages/[collection]/[slug]/index.astro", void 0);

const $$file = "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/pages/[collection]/[slug]/index.astro";
const $$url = "/[collection]/[slug]";

export { $$Index as default, $$file as file, $$url as url };

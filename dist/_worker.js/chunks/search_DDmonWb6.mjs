globalThis.process ??= {}; globalThis.process.env ??= {};
import './@astrojs_tZBGB29K.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, F as Fragment, a as addAttribute } from './astro_B8nBHHeA.mjs';
import './kleur_DHimoS-P.mjs';
import { c as collections, g as getCollection, $ as $$DocsLayout } from './DocsLayout_Dlb3fAOV.mjs';
import { M as MiniSearch } from './minisearch_udz6tidG.mjs';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("q") ?? "";
  Astro2.response.headers.set(
    "Cache-Control",
    "public, max-age=3600, s-maxage=3600, stale-while-revalidate=3600"
  );
  const allCollections = await Promise.all(
    // @ts-ignore
    Object.keys(collections).map(getCollection)
  );
  const result = allCollections.flatMap((c) => {
    return c.map((e) => {
      return {
        id: `${e.collection}/${e.slug}`,
        title: e.data.title,
        shortTitle: e.data.shortTitle,
        description: e.data.description,
        body: e.body
      };
    });
  });
  const minisearch = new MiniSearch({
    fields: ["title", "shortTitle", "description", "body"],
    storeFields: ["title", "href", "description"]
  });
  minisearch.addAll(result);
  const suggestions = minisearch.autoSuggest(query);
  const searchResult = minisearch.search({
    queries: [query, ...suggestions.map((e) => e.terms)].flatMap((e) => e)
  });
  return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div> <ul class="flex flex-col gap-2"> ${searchResult.map((e, i) => {
    return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<li class="text-black"> <a${addAttribute(e.id, "href")} class="block text-black font-semibold"> <span>${e.title}</span> <p class="text-black text-balance text-sm font-medium mt-2"> ${e.description} </p> </a> </li> ${i !== searchResult.length - 1 && renderTemplate`<hr class="my-4 border-gray-800">`}` })}`;
  })} </ul> </div> ` })}`;
}, "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/pages/search.astro", void 0);

const $$file = "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/pages/search.astro";
const $$url = "/search";

export { $$Search as default, $$file as file, $$url as url };

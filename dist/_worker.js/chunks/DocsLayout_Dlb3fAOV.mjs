globalThis.process ??= {}; globalThis.process.env ??= {};
import { h as createCollectionToGlobResultMap, i as createGetCollection, j as createGetEntry, k as defineCollection, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent, l as renderHead, g as renderSlot } from './astro_B8nBHHeA.mjs';
import './kleur_DHimoS-P.mjs';
import { c as clsx } from './clsx_CNI3IGC6.mjs';
import { t as twMerge } from './tailwind-merge_TY4lI7Gs.mjs';
import { $ as $$SEO } from './astro-seo_KtCNT4aQ.mjs';
/* empty css                         */
import { e as enumType, o as objectType, l as literalType, s as stringType, n as numberType } from './zod_DGcF6_AC.mjs';

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/march/what-is-it.md": () => import('./what-is-it_ikTns-Xz.mjs'),"/src/content/march/why-march.md": () => import('./why-march_U4ItRdIW.mjs'),"/src/content/satellite/blocks.md": () => import('./blocks_CTSx2kB3.mjs'),"/src/content/satellite/clipper.md": () => import('./clipper_C46F9ID8.mjs'),"/src/content/satellite/inbox.md": () => import('./inbox_CsLMsVsg.mjs'),"/src/content/satellite/integrations.md": () => import('./integrations_CdRmdTv1.mjs'),"/src/content/satellite/today.md": () => import('./today_CrGWjzLO.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"satellite":{"type":"content","entries":{"blocks":"/src/content/satellite/blocks.md","clipper":"/src/content/satellite/clipper.md","inbox":"/src/content/satellite/inbox.md","integrations":"/src/content/satellite/integrations.md","today":"/src/content/satellite/today.md"}},"march":{"type":"content","entries":{"why-march":"/src/content/march/why-march.md","what-is-it":"/src/content/march/what-is-it.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/march/what-is-it.md": () => import('./what-is-it_B-kmbVQq.mjs'),"/src/content/march/why-march.md": () => import('./why-march_O97DTPNJ.mjs'),"/src/content/satellite/blocks.md": () => import('./blocks_DyKKxpaL.mjs'),"/src/content/satellite/clipper.md": () => import('./clipper_sLsAdncE.mjs'),"/src/content/satellite/inbox.md": () => import('./inbox_DW9GZwa2.mjs'),"/src/content/satellite/integrations.md": () => import('./integrations_B9UkU3YP.mjs'),"/src/content/satellite/today.md": () => import('./today_DvEpqC0q.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const TypeEnum = enumType([
  "base",
  "database",
  "storage",
  "queue"
]);
const ServiceName = enumType([
  "base",
  "March",
  "Satellite"
]);
const baseSchema = objectType({
  type: literalType("base").optional().default("base"),
  name: ServiceName.optional().default("base"),
  shortTitle: stringType(),
  order: numberType().optional().default(Infinity),
  title: stringType(),
  description: stringType()
});
const March = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    type: literalType(TypeEnum.enum.database).default(TypeEnum.enum.database),
    name: literalType("march").default("march")
  })
});
const Satellite = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    // type: z.literal(TypeEnum.enum.webserver).default(TypeEnum.enum.webserver),
    name: literalType("satellite").default("satellite")
  })
});
const collections = {
  march: March,
  satellite: Satellite
};

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro$3 = createAstro();
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const path = Astro2.url.pathname;
  const sidebar = Astro2.props;
  const isActive = (href) => path.startsWith(href);
  return renderTemplate`${maybeRenderHead()}<div id="sidebar" data-open="false"${addAttribute(cn(
    "fixed md:sticky md:top-0 inset-y-0 bg-white z-50",
    "transition-transform left-0 duration-300 ease-in-out",
    "md:translate-x-0 pl-6 pr-14 md:px-0 py-5 md:py-0",
    "border-r border-gray-900 md:border-0",
    "data-[open=true]:translate-x-0 data-[open=false]:-translate-x-full",
    "md:data-[open=false]:translate-x-0"
  ), "class")}> <div id="sidebar-toggle" class="absolute hidden md:hidden top-[26px] -right-9"> <button onclick="toggleSidebar()"> <svg class="h-6 text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path opacity="0.32" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967L12 10.9393L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L13.0607 12L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L12 13.0607L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7626 8.46967 14.4697L10.9393 12L8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967Z" fill="currentColor"></path> </svg> </button> </div> <div class="w-40 pl-4 shrink-0 font-mono flex flex-col gap-14"> <a href="/" class="text-black decoration-gray-400 pt-2"> <!-- <h1 class="text-xl font-medium font-mono h-[2.38rem] flex items-center">
        Satel<span class="underline decoration-gray-200">lite</span>
      </h1> --> <h1 class="text-xl font-medium font-mono h-[2.38rem] flex items-center">
march
</h1> </a> <div class="flex flex-col gap-10 -mt-1"> ${sidebar.sections.map((section) => renderTemplate`<div class="flex flex-col gap-4"> <h2 class="text-black font-medium">${section.title}</h2> <div class="flex flex-col gap-3 text-sm font-semibold relative"> <div${addAttribute(
    "absolute -left-4 bg-gray-800 -inset-y-1 w-px rounded-full",
    "class"
  )}></div> ${section.subsections.map((subsection) => renderTemplate`<a${addAttribute(cn(
    "text-gray-500 group hover:text-gray-700 lowercase relative",
    "flex items-center gap-2",
    "transition-colors duration-300",
    {
      "text-gray-700": isActive(subsection.href)
    }
  ), "class")}${addAttribute(`${subsection.href}`, "href")}> ${subsection.title} </a>`)} </div> </div>`)} </div> </div> </div> <div id="overlay" class="fixed z-[49] inset-0 hidden bg-black opacity-50" onclick="toggleSidebar()"></div>`;
}, "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/components/sidebar.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const props = {
    title: "march",
    description: "",
    openGraph: {
      basic: {
        type: "website",
        title: "march",
        image: "https://march.cat/"
      }
    },
    ...Astro2.props,
    ...Astro2.props.frontmatter
  };
  return renderTemplate`<html class="scroll-smooth antialiased" lang="en" data-astro-cid-sckkx6r4> <head>${renderComponent($$result, "SEO", $$SEO, { ...props, "data-astro-cid-sckkx6r4": true })}<meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"><meta charset="utf-8">${renderHead()}</head> <body class="-gray-950 text-black" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Search = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Search;
  const search = Astro2.url.searchParams.get("search") || "";
  return renderTemplate`${maybeRenderHead()}<div class="flex-1"> <form action="/search" method="get"> <div class="relative"> <svg viewBox="0 0 24 24" class="h-4 w-4 text-gray-500 absolute top-1/2 left-4 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg"> <path fill="currentColor" d="M21.53 20.46l-3.64-3.64c-.3-.3-.77-.3-1.07 0 -.3.29-.3.76 0 1.06l3.63 3.63c.29.29.76.29 1.06 0 .29-.3.29-.77 0-1.07Zm-3.64-2.58c1.81-1.82 2.85-4.28 2.85-6.9 0-5.39-4.37-9.75-9.75-9.75 -5.39 0-9.75 4.36-9.75 9.75 0 5.38 4.36 9.75 9.75 9.75 2.62 0 5.07-1.04 6.89-2.86Zm-1.07-1.07c-1.54 1.53-3.62 2.41-5.84 2.41 -4.56 0-8.25-3.7-8.25-8.25 0-4.56 3.69-8.25 8.25-8.25 4.55 0 8.25 3.69 8.25 8.25 0 2.21-.88 4.29-2.42 5.83Z"></path> </svg> <input name="q" type="text" placeholder="Search..." autocomplete="off"${addAttribute(search, "value")} class="w-full text-sm font-mono lowercase rounded-xl
        p-2  border border-gray-800 duration-400 ring-opacity-0 ring transition-all ring-white
        text-black border-transparent focus:outline-none pl-10"> </div> </form> </div>`;
}, "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/components/search.astro", void 0);

const $$Links = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-5 text-gray-"> <a target="_blank" href="https://x.com/_marchhq" class="hover:text-gray-600 transition-colors duration-3000"> <i class="fa-brands fa-x-twitter"></i> </a> <a target="_blank" href="https://discord.gg/sugJGckV86" class="hover:text-gray-600 transition-colors duration-3000"> <i class="fa-brands fa-discord"></i> </a> </div>`;
}, "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/components/links.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="flex items-center z-30 gap-5 justify-end sticky top-0 bg-white py-2"> <button onclick="toggleSidebar()" class="md:hidden"> <svg viewBox="0 0 24 24" class="text-black h-6" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M3 6.75h18c.41 0 .75-.34.75-.75 0-.42-.34-.75-.75-.75H3c-.42 0-.75.33-.75.75 0 .41.33.75.75.75Zm0 6h8c.41 0 .75-.34.75-.75 0-.42-.34-.75-.75-.75H3c-.42 0-.75.33-.75.75 0 .41.33.75.75.75Zm0 6h13c.41 0 .75-.34.75-.75 0-.42-.34-.75-.75-.75H3c-.42 0-.75.33-.75.75 0 .41.33.75.75.75Z"></path></svg> </button> ', " ", ' </div> <script>\n  const toggleSidebar = () => {\n    // get the sidebar element\n    const sidebar = document.getElementById("sidebar");\n    const overlay = document.getElementById("overlay");\n    const sidebarToggle = document.getElementById("sidebar-toggle");\n    const body = document.querySelector("body");\n    // toggle the sidebar class\n    if (!sidebar || !overlay) return;\n    const isOpen = sidebar.getAttribute("data-open") === "true";\n    sidebar.setAttribute("data-open", (!isOpen).toString());\n    body.classList.toggle("overflow-hidden");\n    overlay.classList.toggle("hidden");\n    sidebarToggle.classList.toggle("hidden");\n  };\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Search", $$Search, {}), renderComponent($$result, "Links", $$Links, {}));
}, "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/components/navbar.astro", void 0);

const $$Astro = createAstro();
const $$DocsLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DocsLayout;
  const allCollections = await Promise.all(
    // @ts-ignore
    Object.keys(collections).map(getCollection)
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex mx-auto max-w-5xl md:gap-14 px-8 md:px-10 lg:px-12 py-4 md:py-8 lg:py-12 text-gray-500 group hover:text-gray-700"> <aside class="shrink-0 "> ${renderComponent($$result2, "Sidebar", $$Sidebar, { "sections": allCollections.map((collection) => ({
    title: collection[0].data.name,
    subsections: collection.sort((a, b) => a.data.order - b.data.order).map((entry) => ({
      title: entry.data.shortTitle,
      href: `/${entry.collection}/${entry.slug}`
    }))
  })) })} </aside> <main class="gap-8 flex flex-col w-full text-black"> ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderSlot($$result2, $$slots["default"])} </main> </main>  ` })}`;
}, "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/layouts/DocsLayout.astro", void 0);

export { $$DocsLayout as $, getEntry as a, collections as c, getCollection as g };

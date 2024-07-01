globalThis.process ??= {}; globalThis.process.env ??= {};
import './@astrojs_tZBGB29K.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as renderComponent } from './astro_B8nBHHeA.mjs';
import './kleur_DHimoS-P.mjs';
import { $ as $$ProseLayout } from './ProseLayout_Dp9xBYoO.mjs';
import { a as axios } from './axios_nMo8KKf6.mjs';

const $$Astro$1 = createAstro();
const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Newsletter;
  let registered = Astro2.url.searchParams.get("registered") === "true";
  let error = Astro2.url.searchParams.get("error");
  return renderTemplate`${maybeRenderHead()}<hr> <p class="text-black">Join our newsletter.</p> <form method="POST" class="font-mono font-medium isolate mt-8 flex items-center pr-1"> <div class="relative h-11 min-w-[200px]"> <input type="email" name="email" placeholder="Email" class="peer h-full w-full border-b border-neutral-200 bg-transparent pt-4 pb-1.5
                     font-sans text-sm font-normal text-neutral-100 outline outline-0 transition-all
                     placeholder-shown:border-neutral-200 focus:border-neutral-500 focus:outline-0
                     disabled:border-0 disabled:bg-neutral-50 placeholder:opacity-0
                     focus:placeholder:opacity-100"> <label class="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full
                     select-none !overflow-visible truncate text-[11px] font-normal leading-tight
                     text-neutral-500 transition-all after:absolute after:-bottom-1.5 after:block
                     after:w-full after:scale-x-0 after:border-b-2 after:border-neutral-500
                     after:transition-transform after:duration-300 peer-placeholder-shown:text-sm
                     peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-neutral-500
                     peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-neutral-500
                     peer-focus:after:scale-x-100 peer-focus:after:border-neutral-700
                     peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-neutral-500">
Email
</label> </div> <button type="submit" class="font-mono font-medium ml-3 mt-3 text-sm text-black"> <svg class="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8 12.75h8c.41 0 .75-.34.75-.75 0-.42-.34-.75-.75-.75H8c-.42 0-.75.33-.75.75 0 .41.33.75.75.75Zm8.53-1.29l-3-3c-.3-.3-.77-.3-1.07 0 -.3.29-.3.76 0 1.06l3 3c.29.29.76.29 1.06 0 .29-.3.29-.77 0-1.07Zm-1.07 0l-3 3c-.3.29-.3.76 0 1.06 .29.29.76.29 1.06 0l3-3c.29-.3.29-.77 0-1.07 -.3-.3-.77-.3-1.07 0Zm5.78.53c0 5.1-4.15 9.25-9.25 9.25 -5.11 0-9.25-4.15-9.25-9.25 0-5.11 4.14-9.25 9.25-9.25 5.1 0 9.25 4.14 9.25 9.25Zm1.5 0c0-5.94-4.82-10.75-10.75-10.75 -5.94 0-10.75 4.81-10.75 10.75 0 5.93 4.81 10.75 10.75 10.75 5.93 0 10.75-4.82 10.75-10.75Z"></path></svg> </button> </form> ${registered && renderTemplate`<p class="text-sm sm:text-xs font-mono text-neutral-100">Thank you!</p>`} ${error && renderTemplate`<p class="text-sm sm:text-xs font-mono text-red-500">${error}</p>`}`;
}, "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/components/newsletter.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const email = formData.get("email");
    if (!email) {
      return Astro2.redirect(
        `/?error=${encodeURIComponent("Please enter an email")}`
      );
    }
    const formBody = `email=${encodeURIComponent(email)}`;
    try {
      const response = await axios.post(
        "https://app.loops.so/api/newsletter-form/clky11weo00q9l80oo39mxfp4",
        formBody,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      );
      console.log(response.data);
    } catch (error) {
      const e = error;
      console.error("Error while submitting newsletter form:", e.response?.data);
      return Astro2.redirect(
        `/?error=${encodeURIComponent("Failed to submit newsletter form")}`
      );
    }
    return Astro2.redirect("/?registered=true");
  }
  return renderTemplate`<!-- ---
import ProseLayout from "../layouts/ProseLayout.astro";
import Newsletter from "../components/newsletter.astro";
import axios, { AxiosError } from "axios";
// import { LogSnag } from "@logsnag/astro/server";

if (Astro.request.method === "POST") {
  const formData = await Astro.request.formData();
  const email = formData.get("email") as string;
  if (!email) {
    return Astro.redirect(
      \`/?error=\${encodeURIComponent("Please enter an email")}\`
      //  const formBody = \`email=\${encodeURIComponent(email)}\`;
    );
  }

  // const sng = new LogSnag({
  //   token: import.meta.env.DEV
  //     ? import.meta.env.LOGSNAG_TOKEN
  //     : Astro.locals.runtime.env.LOGSNAG_TOKEN,
  //   project: import.meta.env.DEV
  //     ? import.meta.env.LOGSNAG_PROJECT
  //     : Astro.locals.runtime.env.LOGSNAG_PROJECT,
  // });
  console.log(import.meta.env.NEWSLETTER_LOOPS_API);
  const formBody = \`email=\${encodeURIComponent(email)}\`;
  try {
    const response = await axios.post(
    import.meta.env.NEWSLETTER_LOOPS_API!,
    formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response);
  } catch (error) {
    const e = error as AxiosError;
    console.error(e.response?.data);
  }
  return Astro.redirect("/?registered=true");
} -->${renderComponent($$result, "ProseLayout", $$ProseLayout, { "class": "text-black" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-black">hola martians!</h1> <p class="text-black">
dump almost everything and put them in a highly opinionated workflow to actually process them.
</p> <p class="text-black">
fully open source— built in rust.
</p> <p class="text-black">
we have a satellite version for makers who like adventures, to contribute/play <a class="text-black" href="mailto: satellite@march.cat" target="_blank">mailto: satellite@march.cat</a> or visit our <a class="text-black" href="https://github.com/marchhq" target="_blank">github</a> page.
</p> <p class="text-black">btw, we make <a class="text-black" href="https://blog.march.cat" target="_blank">memes</a> too ◠‿◠</p> ${renderComponent($$result2, "Newsletter", $$Newsletter, {})} ` })}`;
}, "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/pages/index.astro", void 0);
const $$file = "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

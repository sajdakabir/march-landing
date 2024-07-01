globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8nBHHeA.mjs';
import './kleur_DHimoS-P.mjs';

const html = "<h1 id=\"why-march\">why march</h1>\n<p>I have some late night thoughts saved in my apple notes and my personal todo’s are somewhere in a notion doc and work to-dos is in linear, some urls are dumped in slack:me and some are saved via notion clipper which i never re-open and i sometimes write journals but i don’t know where are they.</p>\n<p>sounds familiar ?</p>\n<p>read— <a href=\"https://blog.march.cat/post/why-not-use-notion\">why not notion?</a></p>";

				const frontmatter = {"order":1,"shortTitle":"why march","title":"why march","description":"why march"};
				const file = "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/content/march/why-march.md";
				const url = undefined;
				function rawContent() {
					return "\n# why march\n\nI have some late night thoughts saved in my apple notes and my personal todo's are somewhere in a notion doc and work to-dos is in linear, some urls are dumped in slack:me and some are saved via notion clipper which i never re-open and i sometimes write journals but i don't know where are they. \n\nsounds familiar ?\n\nread— [why not notion?](https://blog.march.cat/post/why-not-use-notion)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"why-march","text":"why march"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

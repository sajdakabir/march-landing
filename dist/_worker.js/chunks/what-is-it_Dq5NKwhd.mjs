globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8nBHHeA.mjs';
import './kleur_DHimoS-P.mjs';

const html = "<h1 id=\"what-is-it\">what is it</h1>\n<p>march is a blazing fast connected workspace for all your action items, to-do’s notes, urls to put on motion.</p>";

				const frontmatter = {"order":0,"shortTitle":"what is it","title":"what is it","description":"what is it"};
				const file = "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/content/march/what-is-it.md";
				const url = undefined;
				function rawContent() {
					return "\n# what is it\n\nmarch is a blazing fast connected workspace for all your action items, to-do's notes, urls to put on motion.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"what-is-it","text":"what is it"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

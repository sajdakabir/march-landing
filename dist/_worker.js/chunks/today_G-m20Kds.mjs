globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8nBHHeA.mjs';
import './kleur_DHimoS-P.mjs';

const html = "<h1 id=\"today\">today</h1>\n<p>the only tab you need to execute things daily— a view of  your daily agenda, meetings and to-dos that matters most with a rich markdown doc to save notes/journal of the day.</p>\n<p>TODO: add screen</p>";

				const frontmatter = {"order":0,"title":"today","shortTitle":"today","description":"today"};
				const file = "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/content/satellite/today.md";
				const url = undefined;
				function rawContent() {
					return "\n# today\n\nthe only tab you need to execute things daily— a view of  your daily agenda, meetings and to-dos that matters most with a rich markdown doc to save notes/journal of the day.\n\nTODO: add screen";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"today","text":"today"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

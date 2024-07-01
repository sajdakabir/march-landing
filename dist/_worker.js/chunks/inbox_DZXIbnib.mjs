globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8nBHHeA.mjs';
import './kleur_DHimoS-P.mjs';

const html = "<h1 id=\"inbox\">inbox</h1>\n<p>It’s your default destination of anything you capture on the internet and action items, to-dos from all your connected apps to process later or move them to today.</p>\n<p>TODO: add screen</p>";

				const frontmatter = {"order":0,"title":"inbox","shortTitle":"inbox","description":"inbox"};
				const file = "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/content/satellite/inbox.md";
				const url = undefined;
				function rawContent() {
					return "\n# inbox\n\nIt's your default destination of anything you capture on the internet and action items, to-dos from all your connected apps to process later or move them to today.\n\nTODO: add screen";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"inbox","text":"inbox"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

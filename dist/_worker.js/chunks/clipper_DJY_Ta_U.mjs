globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8nBHHeA.mjs';
import './kleur_DHimoS-P.mjs';

const html = "<h1 id=\"clipper\">clipper</h1>\n<p>this is a chrome extension that lets you save things from the browser with context from web pages,  from notes to twitter bookmarks, almost everything.</p>\n<p>TODO: add loom video.</p>";

				const frontmatter = {"order":3,"title":"clipper","shortTitle":"clipper","description":"clipper"};
				const file = "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/content/satellite/clipper.md";
				const url = undefined;
				function rawContent() {
					return "\n# clipper\n\nthis is a chrome extension that lets you save things from the browser with context from web pages,  from notes to twitter bookmarks, almost everything.\n\nTODO: add loom video.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"clipper","text":"clipper"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

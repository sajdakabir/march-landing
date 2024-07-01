globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8nBHHeA.mjs';
import './kleur_DHimoS-P.mjs';

const html = "<h1 id=\"blocks\">blocks</h1>\n<p>you might like to see your watch-list and reading list together in a single page ? using blocks you can build your own productivity space.</p>\n<p>currently we have three types of blocks : notes, to-dos, embeds.</p>\n<p>TODO: add draft screens</p>";

				const frontmatter = {"order":1,"title":"blocks","shortTitle":"blocks","description":"blocks"};
				const file = "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/content/satellite/blocks.md";
				const url = undefined;
				function rawContent() {
					return "\n# blocks\n\nyou might like to see your watch-list and reading list together in a single page ? using blocks you can build your own productivity space.\n\ncurrently we have three types of blocks : notes, to-dos, embeds.\n\nTODO: add draft screens";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"blocks","text":"blocks"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

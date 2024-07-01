globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8nBHHeA.mjs';
import './kleur_DHimoS-P.mjs';

const html = "<h1 id=\"integrations\">integrations</h1>\n<p>As of now we are supporting calendar &#x26; linear integration but feel free to try our Zapier integration if you like some adventure.</p>\n<p>In progress: email, gitHub, raycast.</p>";

				const frontmatter = {"title":"integrations","shortTitle":"integrations","description":"integrations"};
				const file = "/Users/sajdakabir/Downloads/Documents/test/march-landing/src/content/satellite/integrations.md";
				const url = undefined;
				function rawContent() {
					return "\n# integrations\n\nAs of now we are supporting calendar & linear integration but feel free to try our Zapier integration if you like some adventure.\n\nIn progress: email, gitHub, raycast.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"integrations","text":"integrations"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

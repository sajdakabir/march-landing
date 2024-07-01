globalThis.process ??= {}; globalThis.process.env ??= {};
async function getMod() {
						return import('./clipper_DJY_Ta_U.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const collectedScripts = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts };

export { defaultMod as default };

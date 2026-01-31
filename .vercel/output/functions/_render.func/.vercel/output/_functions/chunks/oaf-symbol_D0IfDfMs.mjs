const oafSymbol = new Proxy({"src":"/_astro/oaf-symbol.CwYm9SrN.png","width":260,"height":260,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/oaf-symbol.png";
							}
							
							return target[name];
						}
					});

export { oafSymbol as default };

const nbsSymbol = new Proxy({"src":"/_astro/nbs-symbol.CD_cO2Jr.png","width":260,"height":260,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/nbs-symbol.png";
							}
							
							return target[name];
						}
					});

export { nbsSymbol as default };

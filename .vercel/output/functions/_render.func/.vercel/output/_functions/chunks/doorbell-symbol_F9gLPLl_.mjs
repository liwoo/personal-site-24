const doorbellSymbol = new Proxy({"src":"/_astro/doorbell-symbol.G_BX2oxs.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/doorbell-symbol.png";
							}
							
							return target[name];
						}
					});

export { doorbellSymbol as default };

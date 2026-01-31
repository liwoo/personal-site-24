const liwuSymbol = new Proxy({"src":"/_astro/liwu-symbol.CEiI8iWc.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/liwu-symbol.png";
							}
							
							return target[name];
						}
					});

export { liwuSymbol as default };

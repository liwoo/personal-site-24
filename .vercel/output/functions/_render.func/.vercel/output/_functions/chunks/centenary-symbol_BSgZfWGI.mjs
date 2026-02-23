const centenarySymbol = new Proxy({"src":"/_astro/centenary-symbol.fML4-ugJ.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/centenary-symbol.png";
							}
							
							return target[name];
						}
					});

export { centenarySymbol as default };

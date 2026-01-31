const mtlSymbol = new Proxy({"src":"/_astro/mtl-symbol.Hkzzvt9h.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/mtl-symbol.png";
							}
							
							return target[name];
						}
					});

export { mtlSymbol as default };

const bestsellerLogo = new Proxy({"src":"/_astro/bestseller-symbol.Cvao-MUr.png","width":260,"height":260,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/bestseller-symbol.png";
							}
							
							return target[name];
						}
					});

export { bestsellerLogo as default };

const bhtLogo = new Proxy({"src":"/_astro/bht-symbol.Dc7wpEc7.png","width":260,"height":260,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/bht-symbol.png";
							}
							
							return target[name];
						}
					});

export { bhtLogo as default };

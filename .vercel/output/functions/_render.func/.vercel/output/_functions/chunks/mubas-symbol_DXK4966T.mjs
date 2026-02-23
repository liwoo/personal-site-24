const mubasLogo = new Proxy({"src":"/_astro/mubas-symbol.gWIMIUvt.png","width":250,"height":249,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/mubas-symbol.png";
							}
							
							return target[name];
						}
					});

export { mubasLogo as default };

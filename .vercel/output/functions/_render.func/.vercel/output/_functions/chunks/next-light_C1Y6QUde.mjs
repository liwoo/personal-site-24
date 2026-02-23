const nextLight = new Proxy({"src":"/_astro/next-light.DZwe7rtT.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/next-light.png";
							}
							
							return target[name];
						}
					});

export { nextLight as default };

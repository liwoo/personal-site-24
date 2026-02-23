const nbsLight = new Proxy({"src":"/_astro/nbs-light.DrYeV5B7.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/nbs-light.png";
							}
							
							return target[name];
						}
					});

export { nbsLight as default };

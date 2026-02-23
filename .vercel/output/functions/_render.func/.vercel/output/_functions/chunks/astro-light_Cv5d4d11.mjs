const astroLight = new Proxy({"src":"/_astro/astro-light.4hwxTMqv.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/astro-light.png";
							}
							
							return target[name];
						}
					});

export { astroLight as default };

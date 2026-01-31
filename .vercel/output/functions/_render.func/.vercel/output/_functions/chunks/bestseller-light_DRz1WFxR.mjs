const bestsellerLight = new Proxy({"src":"/_astro/bestseller-light.sGRJQ28t.png","width":224,"height":224,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/bestseller-light.png";
							}
							
							return target[name];
						}
					});

export { bestsellerLight as default };

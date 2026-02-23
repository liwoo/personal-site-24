const bestsellerDark = new Proxy({"src":"/_astro/bestseller-dark.BSDBMe-A.png","width":224,"height":224,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/bestseller-dark.png";
							}
							
							return target[name];
						}
					});

export { bestsellerDark as default };

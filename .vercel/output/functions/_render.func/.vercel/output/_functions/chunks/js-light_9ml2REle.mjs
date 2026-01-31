const jsLight = new Proxy({"src":"/_astro/js-light.AoPJK30T.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/js-light.png";
							}
							
							return target[name];
						}
					});

export { jsLight as default };

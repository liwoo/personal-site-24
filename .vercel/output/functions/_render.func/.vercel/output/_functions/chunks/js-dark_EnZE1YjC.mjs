const jsDark = new Proxy({"src":"/_astro/js-dark.C-QKl_01.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/js-dark.png";
							}
							
							return target[name];
						}
					});

export { jsDark as default };

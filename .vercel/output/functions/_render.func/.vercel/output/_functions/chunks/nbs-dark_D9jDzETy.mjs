const nbsDark = new Proxy({"src":"/_astro/nbs-dark.359k3CwS.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/nbs-dark.png";
							}
							
							return target[name];
						}
					});

export { nbsDark as default };

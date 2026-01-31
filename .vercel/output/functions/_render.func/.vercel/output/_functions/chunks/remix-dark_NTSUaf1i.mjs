const remixDark = new Proxy({"src":"/_astro/remix-dark.D0xsyJca.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/remix-dark.png";
							}
							
							return target[name];
						}
					});

export { remixDark as default };

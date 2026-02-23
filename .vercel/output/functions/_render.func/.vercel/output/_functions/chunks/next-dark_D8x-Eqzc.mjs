const nextDark = new Proxy({"src":"/_astro/next-dark.Biu4wquo.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/next-dark.png";
							}
							
							return target[name];
						}
					});

export { nextDark as default };

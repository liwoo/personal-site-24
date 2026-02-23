const kuunikaDark = new Proxy({"src":"/_astro/kuunika-dark.Deb30rOY.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/kuunika-dark.png";
							}
							
							return target[name];
						}
					});

export { kuunikaDark as default };

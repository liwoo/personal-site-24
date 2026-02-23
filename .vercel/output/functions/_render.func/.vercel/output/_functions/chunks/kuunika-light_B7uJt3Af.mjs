const kuunikaLight = new Proxy({"src":"/_astro/kuunika-light.BOfWwpEj.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/kuunika-light.png";
							}
							
							return target[name];
						}
					});

export { kuunikaLight as default };

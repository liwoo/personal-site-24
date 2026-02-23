const seshatLight = new Proxy({"src":"/_astro/seshat-light.DCS54jHN.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/seshat-light.png";
							}
							
							return target[name];
						}
					});

export { seshatLight as default };

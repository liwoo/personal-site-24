const undpLight = new Proxy({"src":"/_astro/undp-light.C34nvZuJ.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/undp-light.png";
							}
							
							return target[name];
						}
					});

export { undpLight as default };

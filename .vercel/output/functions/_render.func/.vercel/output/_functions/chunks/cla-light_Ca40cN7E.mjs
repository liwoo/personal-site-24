const claLight = new Proxy({"src":"/_astro/cla-light.8fFuFZoJ.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/cla-light.png";
							}
							
							return target[name];
						}
					});

export { claLight as default };

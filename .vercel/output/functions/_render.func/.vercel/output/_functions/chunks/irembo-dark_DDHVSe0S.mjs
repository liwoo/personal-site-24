const iremboDark = new Proxy({"src":"/_astro/irembo-dark.lSrU_v3C.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/irembo-dark.png";
							}
							
							return target[name];
						}
					});

export { iremboDark as default };

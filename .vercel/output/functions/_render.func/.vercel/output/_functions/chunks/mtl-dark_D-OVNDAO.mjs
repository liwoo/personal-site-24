const mtlDark = new Proxy({"src":"/_astro/mtl-dark.y6qXJaGB.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/mtl-dark.png";
							}
							
							return target[name];
						}
					});

export { mtlDark as default };

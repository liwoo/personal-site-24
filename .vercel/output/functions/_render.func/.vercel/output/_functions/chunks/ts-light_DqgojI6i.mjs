const tsLight = new Proxy({"src":"/_astro/ts-light.DxVF4TZr.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/ts-light.png";
							}
							
							return target[name];
						}
					});

export { tsLight as default };

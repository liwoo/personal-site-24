const golangLight = new Proxy({"src":"/_astro/golang-light.mpQH014k.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/golang-light.png";
							}
							
							return target[name];
						}
					});

export { golangLight as default };

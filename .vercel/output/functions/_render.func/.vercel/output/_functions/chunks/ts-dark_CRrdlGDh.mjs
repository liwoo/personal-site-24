const tsDark = new Proxy({"src":"/_astro/ts-dark.P7bo4itC.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/ts-dark.png";
							}
							
							return target[name];
						}
					});

export { tsDark as default };

const golangDark = new Proxy({"src":"/_astro/golang-dark.DbXz1HwF.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/golang-dark.png";
							}
							
							return target[name];
						}
					});

export { golangDark as default };

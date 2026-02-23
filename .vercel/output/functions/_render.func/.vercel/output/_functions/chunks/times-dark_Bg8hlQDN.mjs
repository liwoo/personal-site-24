const timesDark = new Proxy({"src":"/_astro/times-dark.Bo1Gj2BA.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/times-dark.png";
							}
							
							return target[name];
						}
					});

export { timesDark as default };

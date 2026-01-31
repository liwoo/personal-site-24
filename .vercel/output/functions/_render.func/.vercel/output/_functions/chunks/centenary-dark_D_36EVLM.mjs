const centenaryDark = new Proxy({"src":"/_astro/centenary-dark.B2qv94En.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/centenary-dark.png";
							}
							
							return target[name];
						}
					});

export { centenaryDark as default };

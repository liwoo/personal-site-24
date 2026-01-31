const claDark = new Proxy({"src":"/_astro/cla-dark.Db74BjeY.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/cla-dark.png";
							}
							
							return target[name];
						}
					});

export { claDark as default };

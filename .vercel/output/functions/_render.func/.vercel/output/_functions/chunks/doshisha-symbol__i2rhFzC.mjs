const doshishaLogo = new Proxy({"src":"/_astro/doshisha-symbol.Dpj2lK5j.gif","width":190,"height":131,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/doshisha-symbol.gif";
							}
							
							return target[name];
						}
					});

export { doshishaLogo as default };

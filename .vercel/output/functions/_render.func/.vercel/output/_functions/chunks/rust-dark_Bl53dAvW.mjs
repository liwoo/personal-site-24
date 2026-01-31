const rustDark = new Proxy({"src":"/_astro/rust-dark.Ck-kKn3k.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/rust-dark.png";
							}
							
							return target[name];
						}
					});

export { rustDark as default };

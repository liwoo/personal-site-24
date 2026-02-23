const rustLight = new Proxy({"src":"/_astro/rust-light.CWFH_8GM.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/rust-light.png";
							}
							
							return target[name];
						}
					});

export { rustLight as default };

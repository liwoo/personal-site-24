const setup = new Proxy({"src":"/_astro/setup.BX6SexKl.png","width":1135,"height":866,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/setup.png";
							}
							
							return target[name];
						}
					});

export { setup as default };

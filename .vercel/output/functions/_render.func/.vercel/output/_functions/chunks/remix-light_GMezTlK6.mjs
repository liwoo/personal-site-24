const remixLight = new Proxy({"src":"/_astro/remix-light.D3T8RuDu.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/remix-light.png";
							}
							
							return target[name];
						}
					});

export { remixLight as default };

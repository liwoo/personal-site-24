const reactLight = new Proxy({"src":"/_astro/react-light.DX117CGC.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/react-light.png";
							}
							
							return target[name];
						}
					});

export { reactLight as default };

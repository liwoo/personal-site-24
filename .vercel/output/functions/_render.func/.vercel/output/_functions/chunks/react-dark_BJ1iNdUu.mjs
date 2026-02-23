const reactDark = new Proxy({"src":"/_astro/react-dark.7lm2Hn3a.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/react-dark.png";
							}
							
							return target[name];
						}
					});

export { reactDark as default };

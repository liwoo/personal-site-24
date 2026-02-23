const dartLight = new Proxy({"src":"/_astro/dart-light.B6ltZKar.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/dart-light.png";
							}
							
							return target[name];
						}
					});

export { dartLight as default };

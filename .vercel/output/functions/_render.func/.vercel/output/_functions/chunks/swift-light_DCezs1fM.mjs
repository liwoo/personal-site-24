const swiftLight = new Proxy({"src":"/_astro/swift-light.DnJw0XQ8.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/swift-light.png";
							}
							
							return target[name];
						}
					});

export { swiftLight as default };

const flutterLight = new Proxy({"src":"/_astro/flutter-light.CpjU8FEX.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/flutter-light.png";
							}
							
							return target[name];
						}
					});

export { flutterLight as default };

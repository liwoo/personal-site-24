const csharpDark = new Proxy({"src":"/_astro/csharp-dark.Cz69Pkni.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/csharp-dark.png";
							}
							
							return target[name];
						}
					});

export { csharpDark as default };

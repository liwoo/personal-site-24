const dotnetLight = new Proxy({"src":"/_astro/dotnet-light.Cv8ADWcL.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/dotnet-light.png";
							}
							
							return target[name];
						}
					});

export { dotnetLight as default };

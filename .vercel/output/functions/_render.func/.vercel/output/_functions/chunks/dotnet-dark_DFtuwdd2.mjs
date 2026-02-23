const dotnetDark = new Proxy({"src":"/_astro/dotnet-dark.SZ28J8-5.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/dotnet-dark.png";
							}
							
							return target[name];
						}
					});

export { dotnetDark as default };

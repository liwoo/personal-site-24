const irembo = new Proxy({"src":"/_astro/irembo.Dugqvewc.svg","width":224,"height":224,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/irembo.svg";
							}
							
							return target[name];
						}
					});

export { irembo as default };

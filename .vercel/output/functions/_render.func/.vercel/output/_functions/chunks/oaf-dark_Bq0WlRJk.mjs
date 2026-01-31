const oafDark = new Proxy({"src":"/_astro/oaf-dark.BXYkDr6L.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/oaf-dark.png";
							}
							
							return target[name];
						}
					});

export { oafDark as default };

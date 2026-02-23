const undpDark = new Proxy({"src":"/_astro/undp-dark.DDgYTcYT.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/undp-dark.png";
							}
							
							return target[name];
						}
					});

export { undpDark as default };

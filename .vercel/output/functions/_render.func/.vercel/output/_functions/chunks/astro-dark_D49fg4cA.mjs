const astroDark = new Proxy({"src":"/_astro/astro-dark.DkRiz43V.png","width":208,"height":208,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/astro-dark.png";
							}
							
							return target[name];
						}
					});

export { astroDark as default };

const iremboLight = new Proxy({"src":"/_astro/irembo-light.BiSNRXve.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/irembo-light.png";
							}
							
							return target[name];
						}
					});

export { iremboLight as default };

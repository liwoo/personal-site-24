const iremboLogo = new Proxy({"src":"/_astro/irembo-symbol.D6Qr9jtw.png","width":260,"height":260,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/irembo-symbol.png";
							}
							
							return target[name];
						}
					});

export { iremboLogo as default };

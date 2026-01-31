const tnmLight = new Proxy({"src":"/_astro/tnm-light.b2oCtrIN.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/tnm-light.png";
							}
							
							return target[name];
						}
					});

export { tnmLight as default };

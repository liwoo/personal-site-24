const bhtLight = new Proxy({"src":"/_astro/bht-light.BtDIyF-1.png","width":229,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/bht-light.png";
							}
							
							return target[name];
						}
					});

export { bhtLight as default };

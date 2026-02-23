const oafLight = new Proxy({"src":"/_astro/oaf-light.DPDxzeS8.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/oaf-light.png";
							}
							
							return target[name];
						}
					});

export { oafLight as default };

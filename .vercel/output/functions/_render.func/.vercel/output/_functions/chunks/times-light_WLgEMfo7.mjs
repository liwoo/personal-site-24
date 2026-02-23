const timesLight = new Proxy({"src":"/_astro/times-light.DCqvhAM3.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/times-light.png";
							}
							
							return target[name];
						}
					});

export { timesLight as default };

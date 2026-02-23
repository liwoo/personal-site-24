const image = new Proxy({"src":"/_astro/dp.CzY7nzb-.png","width":539,"height":539,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/dp.png";
							}
							
							return target[name];
						}
					});

export { image as default };

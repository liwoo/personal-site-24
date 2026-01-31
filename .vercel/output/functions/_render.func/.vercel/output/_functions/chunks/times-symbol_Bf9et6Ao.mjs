const timesSymbol = new Proxy({"src":"/_astro/times-symbol.CR9o6ysH.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/times-symbol.png";
							}
							
							return target[name];
						}
					});

export { timesSymbol as default };

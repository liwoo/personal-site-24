const mtlLight = new Proxy({"src":"/_astro/mtl-light.sCgX1e9L.png","width":227,"height":227,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/mtl-light.png";
							}
							
							return target[name];
						}
					});

export { mtlLight as default };

const bestseller = new Proxy({"src":"/_astro/bestseller.DhAXK-4g.svg","width":224,"height":224,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/bestseller.svg";
							}
							
							return target[name];
						}
					});

export { bestseller as default };

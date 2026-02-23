const vector = new Proxy({"src":"/_astro/vector-space.BQaVARf6.svg","width":800,"height":500,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/rag/vector-space.svg";
							}
							
							return target[name];
						}
					});

export { vector as default };

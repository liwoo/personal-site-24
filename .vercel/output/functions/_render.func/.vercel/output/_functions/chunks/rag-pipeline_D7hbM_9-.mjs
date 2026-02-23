const pipeline = new Proxy({"src":"/_astro/rag-pipeline.8Lfqwe5p.svg","width":1000,"height":500,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/rag/rag-pipeline.svg";
							}
							
							return target[name];
						}
					});

export { pipeline as default };

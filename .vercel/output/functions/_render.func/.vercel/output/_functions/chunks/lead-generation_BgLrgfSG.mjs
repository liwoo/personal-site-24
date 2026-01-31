const leads = new Proxy({"src":"/_astro/lead-generation.BB0L7E75.png","width":1420,"height":1428,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/agents/lead-generation.png";
							}
							
							return target[name];
						}
					});

export { leads as default };

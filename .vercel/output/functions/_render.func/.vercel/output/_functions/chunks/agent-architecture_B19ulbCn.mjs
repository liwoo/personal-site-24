const agents = new Proxy({"src":"/_astro/agent-architecture.DYjUayEs.svg","width":800,"height":600,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/agents/agent-architecture.svg";
							}
							
							return target[name];
						}
					});

export { agents as default };

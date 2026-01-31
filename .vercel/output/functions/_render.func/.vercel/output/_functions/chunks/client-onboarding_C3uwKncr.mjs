const clients = new Proxy({"src":"/_astro/client-onboarding.nggGbfAe.png","width":1410,"height":1432,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/agents/client-onboarding.png";
							}
							
							return target[name];
						}
					});

export { clients as default };

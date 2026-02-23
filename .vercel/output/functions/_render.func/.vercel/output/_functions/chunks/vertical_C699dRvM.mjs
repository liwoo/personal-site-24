const vertical = new Proxy({"src":"/_astro/vertical.D0f1kpOB.png","width":478,"height":742,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/vertical.png";
							}
							
							return target[name];
						}
					});

export { vertical as default };

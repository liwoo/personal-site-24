const svelteDark = new Proxy({"src":"/_astro/svelte-dark.DojKwId0.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/svelte-dark.png";
							}
							
							return target[name];
						}
					});

export { svelteDark as default };

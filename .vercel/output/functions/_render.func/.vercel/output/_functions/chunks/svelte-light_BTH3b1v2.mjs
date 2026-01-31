const svelteLight = new Proxy({"src":"/_astro/svelte-light._7AO38FK.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/images/logos/png/svelte-light.png";
							}
							
							return target[name];
						}
					});

export { svelteLight as default };

/** @type {import('@sveltejs/kit').Config} */
import cloudflare from '@sveltejs/adapter-cloudflare';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: cloudflare()
	}
};

export default config;

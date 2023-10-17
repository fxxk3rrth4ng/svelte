import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		tsconfigFile: './tsconfig.json'
	}),
	kit: {
		adapter: adapter()
	}
};

config.paths = { base: process.argv.includes('dev') ? '' : process.env.BASE_PATH }

export default config;
import adapter from '@sveltejs/adapter-static'; // Changed from adapter-auto

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		// GitHub Pages is a static host, so we use adapter-static
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html', // Important for SPA routing on subdomains
			precompress: false,
			strict: true
		})
	}
};

export default config;

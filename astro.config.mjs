import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'
import rehypeExternalLinks from 'rehype-external-links'

// https://astro.build/config
export default defineConfig({
	site: 'https://yewtreeweb.co.uk',
	integrations: [sitemap()],
	markdown: {
		rehypePlugins: [
			[rehypeExternalLinks, { target: '_blank', rel: ['nofollow, noopener, noreferrer'] }],
		],
	},
	vite: {
		css: {
			transformer: 'lightningcss',
		},
		ssr: {
			noExternal: ['package-name'],
		},
	},
})

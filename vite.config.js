import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
	server: {
		proxy: {
			'/api': 'http://[::1]:8090',
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/main.js'),
			name: 'pocketsafe',
		},
	},
})

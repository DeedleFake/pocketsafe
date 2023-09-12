import { writable, derived } from 'svelte/store'

function parse(url) {
	url = new URL(url)
	if (!url.hash) {
		return new URLSearchParams()
	}

	return new URLSearchParams(url.hash.substring(1))
}

const backing = writable(window.location, (set) => {
	const listener = (ev) => {
		set(ev.newURL)
	}

	window.addEventListener('hashchange', listener)
	return () => {
		window.removeEventListener('hashchange', listener)
	}
})

export const fragment = {
	subscribe: derived(backing, ($v) => parse($v)).subscribe,
	set: (v) => {
		window.location.hash = v
	},
}

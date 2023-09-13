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

export function fragmentVar(name, defaultValue, f = (v) => v) {
	return {
		subscribe: derived(fragment, ($v) => f($v.get(name) ?? defaultValue))
			.subscribe,
		set: (v) => {
			// TODO: Find a way to structure the stores to make this a bit
			// less weird.
			window.location.hash = rehash(parse(window.location), {
				[name]: v,
			}).toString()
		},
	}
}

// rehash is a convenience function that modifies a URLSearchParams
// with the given changes and returns it.
export function rehash(initial, changes = {}) {
	return Object.entries(changes).reduce((hash, [k, v]) => {
		hash.set(k, v)
		return hash
	}, initial ?? new URLSearchParams())
}

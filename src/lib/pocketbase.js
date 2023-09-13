import { onMount } from 'svelte'
import { writable } from 'svelte/store'
import { goto } from '$app/navigation'
import PocketBase from 'pocketbase'

export const pb = new PocketBase(window.location.origin)
export const currentUser = writable(pb.authStore.model)

export function assertLogin() {
	onMount(() => {
		const unsubscribe = currentUser.subscribe(async (model) => {
			if (!model) {
				await goto(
					`/login?redirect=${encodeURIComponent(window.location.href)}`,
				)
			}
		})
		return () => {
			unsubscribe()
		}
	})
}

export function thumbnail(file) {
	// TODO: Use a default image for files that aren't images.
	return pb.files.getUrl(file, file.file, { thumb: '96x96f' })
}

pb.authStore.onChange((token, model) => {
	currentUser.set(model)
})

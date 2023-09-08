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

pb.authStore.onChange((token, model) => {
	currentUser.set(model)
})

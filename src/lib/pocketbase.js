import { writable } from 'svelte/store'
import PocketBase from 'pocketbase'

export const pb = new PocketBase(window.location.origin)
export const currentUser = writable(pb.authStore.model)

pb.authStore.onChange((token, model) => {
	currentUser.set(model)
})

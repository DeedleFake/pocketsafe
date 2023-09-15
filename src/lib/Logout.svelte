<script>
	import { createEventDispatcher } from 'svelte'

	import Button from '$lib/Button.svelte'

	import { pb, currentUser } from '$lib/pocketbase.js'

	const dispatch = createEventDispatcher()

	export function logout(ev) {
		const ok = dispatch('logout', null, { cancelable: true })
		if (!ok) {
			return
		}

		pb.authStore.clear()
	}
</script>

{#if $currentUser}
	<div>{$currentUser.username}</div>
	<Button on:click={logout}>Logout</Button>
{/if}

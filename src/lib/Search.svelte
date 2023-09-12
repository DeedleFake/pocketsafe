<script>
	import { createEventDispatcher } from 'svelte'

	import TextInput from '$lib/TextInput.svelte'

	const dispatch = createEventDispatcher()

	export let value = ''

	function submit() {
		dispatch('submit', value)
	}
</script>

<form class="contents" on:submit|preventDefault={submit}>
	<TextInput placeholder="Search..." bind:value />
</form>

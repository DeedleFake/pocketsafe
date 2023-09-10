<script>
	import { goto } from '$app/navigation'

	import TextInput from '$lib/TextInput.svelte'
	import Button from '$lib/Button.svelte'
	import { pb, currentUser } from '$lib/pocketbase.js'

	export let redirect = '/'

	$: if ($currentUser) {
		goto(redirect)
	}

	let email = ''
	let password = ''
	let error = ''

	async function login() {
		try {
			await pb.collection('users').authWithPassword(email, password)
			await goto(redirect)
		} catch (err) {
			console.error(err)
			error = error(400, 'Incorrect login information.')
		}
	}
</script>

{#if error}
	<span class="text-red-500">{error}</span>
{/if}

<form class="flex flex-col items-start gap-4" on:submit|preventDefault={login}>
	<TextInput placeholder="E-mail address..." bind:value={email} />
	<TextInput password placeholder="Password..." bind:value={password} />
	<Button type="submit" disabled={!email || !password}>Login</Button>
</form>

<script>
	import TextInput from '$lib/TextInput.svelte'
	import Button from '$lib/Button.svelte'
	import Body from '$lib/Body.svelte'

	import { pb, currentUser } from '$lib/pocketbase.js'

	let email = ''
	let password = ''
	let error = null // Using null so that the div will have some content.

	async function login() {
		try {
			await pb.collection('users').authWithPassword(email, password)
		} catch (err) {
			console.error(err)
			error = 'Incorrect login information.'
			return
		}
	}
</script>

<Body>
	<div class="text-red-500" class:invisible={!error}>{error}</div>

	<form class="flex flex-col items-end gap-4" on:submit|preventDefault={login}>
		<TextInput placeholder="E-mail address..." bind:value={email} />
		<TextInput password placeholder="Password..." bind:value={password} />
		<Button type="submit" disabled={!email || !password}>Login</Button>
	</form>
</Body>

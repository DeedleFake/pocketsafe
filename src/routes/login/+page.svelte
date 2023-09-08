<script>
	import { goto } from '$app/navigation'

	import { pb, currentUser } from '$lib/pocketbase.js'

	$: if ($currentUser) {
		goto('/')
	}

	let email = ''
	let password = ''
	let error = ''

	async function login() {
		try {
			await pb.collection('users').authWithPassword(email, password)
			await goto('/')
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
	<input
		type="text"
		name="email"
		placeholder="E-mail address..."
		bind:value={email}
	/>
	<input
		type="password"
		name="password"
		placeholder="Password..."
		bind:value={password}
	/>
	<input type="submit" value="Login" />
</form>

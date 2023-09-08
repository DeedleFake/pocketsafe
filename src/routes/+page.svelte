<script>
	import Link from '$lib/Link.svelte'
	import { pb, currentUser, assertLogin } from '$lib/pocketbase.js'

	function logout(ev) {
		ev.preventDefault()
		pb.authStore.clear()
	}
</script>

{#if !$currentUser}
	<Link href="/login">Login</Link>
{:else}
	<Link on:click={logout}>Logout</Link>
	<h2>Greetings, {$currentUser.username}.</h2>
{/if}

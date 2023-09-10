<script>
	import Link from '$lib/Link.svelte'
	import { pb, currentUser, assertLogin } from '$lib/pocketbase.js'

	function logout(ev) {
		ev.preventDefault()
		pb.authStore.clear()
	}
</script>

<div class="w-100% h-100% flex justify-center items-center">
	{#if !$currentUser}
		<Link button href="/login">Login</Link>
	{:else}
		<Link button on:click={logout}>Logout</Link>
		<h2>Greetings, {$currentUser.username}.</h2>
	{/if}
</div>

<script>
	import { assets } from '$app/paths'

	import Nav from '$lib/Nav.svelte'
	import Body from '$lib/Body.svelte'
	import Link from '$lib/Link.svelte'
	import Button from '$lib/Button.svelte'
	import CircularProgress from '$lib/CircularProgress.svelte'

	import { pb, currentUser, assertLogin } from '$lib/pocketbase.js'

	export let data
	const { id } = data

	assertLogin()

	$: file = pb.collection('files').getOne(id)

	let filepath
	$: file.then((file) => (filepath = pb.files.getUrl(file, file.file)))

	function logout(ev) {
		pb.authStore.clear()
	}
</script>

<Nav>
	<svelte:fragment slot="start">
		<Link class="hover:opacity-50 transition-all" href="/">
			<img class="max-h-8" src="{assets}/favicon.png" alt="PocketSafe" />
		</Link>
	</svelte:fragment>

	<div slot="middle">
		{#await file}
			{id}
		{:then file}
			{file.name}
		{/await}
	</div>

	<svelte:fragment slot="end">
		<div>{$currentUser.username}</div>
		<Button on:click={logout}>Logout</Button>
	</svelte:fragment>
</Nav>

<Body>
	{#await file}
		<CircularProgress />
	{:then file}
		<Link href={filepath}>
			{JSON.stringify(file)}
		</Link>
	{:catch err}
		<div class="text-red-500">{err}</div>
	{/await}
</Body>

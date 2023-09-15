<script>
	import { assets } from '$app/paths'

	import Nav from '$lib/Nav.svelte'
	import Body from '$lib/Body.svelte'
	import Logout from '$lib/Logout.svelte'
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
</script>

<Nav>
	<div slot="middle">
		{#await file}
			{id}
		{:then file}
			{file.name}
		{/await}
	</div>

	<Logout slot="end" />
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

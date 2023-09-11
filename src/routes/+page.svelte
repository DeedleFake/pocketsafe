<script>
	import { assets } from '$app/paths'

	import Nav from '$lib/Nav.svelte'
	import Body from '$lib/Body.svelte'
	import Link from '$lib/Link.svelte'
	import Card from '$lib/Card.svelte'
	import Grid from '$lib/Grid.svelte'
	import Button from '$lib/Button.svelte'
	import Login from '$lib/Login.svelte'

	import { pb, currentUser, assertLogin } from '$lib/pocketbase.js'

	let files = null
	let fileInput = null
	let newFiles = null

	$: if (newFiles) {
		upload()
	}

	function logout(ev) {
		pb.authStore.clear()
	}

	function loadFiles() {
		files = pb.collection('files').getList(1, 30, { sort: '-created' })
	}

	async function upload() {
		let uploads = []
		for (const file of newFiles) {
			uploads.push(
				pb.collection('files').create({
					name: file.name,
					file: file,
					owner: $currentUser.id,
				}),
			)
		}
		await Promise.all(uploads)

		newFiles = null
		await loadFiles()
	}

	function thumbnail(file) {
		// TODO: Use a default image for files that aren't images.
		return pb.files.getUrl(file, file.file, { thumb: '96x96f' })
	}

	$: if ($currentUser) {
		loadFiles()
	}
</script>

<Nav>
	<svelte:fragment slot="start">
		<Link class="hover:opacity-50" href="/">
			<img class="max-h-8" src="{assets}/favicon.png" alt="PocketSafe" />
		</Link>
		{#if $currentUser}
			<Button on:click={() => fileInput.click()}>Upload</Button>
			<input
				type="file"
				class="hidden"
				bind:this={fileInput}
				bind:files={newFiles}
			/>
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="end">
		{#if $currentUser}
			<div>{$currentUser.username}</div>
			<Button on:click={logout}>Logout</Button>
		{/if}
	</svelte:fragment>
</Nav>

<Body>
	{#if $currentUser}
		{#await files}
			Loading...
		{:then files}
			{#if files.totalItems == 0}
				No files.
			{/if}
			<Grid>
				{#each files.items as file}
					<Link href={pb.files.getUrl(file, file.file)}>
						<Card size="lg">
							<img slot="image" src={thumbnail(file)} alt={file.name} />
							<div slot="subtitle">{file.name}</div>
						</Card>
					</Link>
				{/each}
			</Grid>
		{/await}
	{:else}
		<Login />
	{/if}
</Body>

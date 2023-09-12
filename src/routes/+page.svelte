<script>
	import { assets } from '$app/paths'

	import Nav from '$lib/Nav.svelte'
	import Body from '$lib/Body.svelte'
	import UploadButton from '$lib/UploadButton.svelte'
	import Search from '$lib/Search.svelte'
	import Pager from '$lib/Pager.svelte'
	import Login from '$lib/Login.svelte'
	import Grid from '$lib/Grid.svelte'
	import Card from '$lib/Card.svelte'
	import Link from '$lib/Link.svelte'
	import Button from '$lib/Button.svelte'
	import CircularProgress from '$lib/CircularProgress.svelte'

	import { pb, currentUser } from '$lib/pocketbase.js'

	let files = null
	let page = 1
	let filter = ''

	$: if ($currentUser) {
		loadFiles()
	}

	function logout(ev) {
		pb.authStore.clear()
	}

	function loadFiles(options = {}) {
		files = pb.collection('files').getList(page, 30, {
			sort: '-created',
			filter: `name~"${encodeURIComponent(filter)}"`,
			...options,
		})
	}

	function search() {
		page = 1
		loadFiles()
	}

	function thumbnail(file) {
		// TODO: Use a default image for files that aren't images.
		return pb.files.getUrl(file, file.file, { thumb: '96x96f' })
	}
</script>

<Nav>
	<svelte:fragment slot="start">
		<Link class="hover:opacity-50 transition-all" href="/">
			<img class="max-h-8" src="{assets}/favicon.png" alt="PocketSafe" />
		</Link>
		{#if $currentUser}
			<UploadButton on:upload={loadFiles} />
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="middle">
		<Search bind:value={filter} on:submit={search} />
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
			<CircularProgress />
		{:then files}
			{#if files.totalItems == 0}
				No files.
			{/if}
			<Grid>
				{#each files.items as file}
					<Link href={pb.files.getUrl(file, file.file)}>
						<Card size="lg">
							<img
								slot="image"
								class="rounded-lg grow object-cover"
								src={thumbnail(file)}
								alt={file.file}
							/>
							<div slot="subtitle">{file.name}</div>
						</Card>
					</Link>
				{/each}
			</Grid>

			<Pager
				current={files.page}
				pages={files.totalPages}
				bind:page
				on:change={() => loadFiles()}
			/>
		{/await}
	{:else}
		<Login />
	{/if}
</Body>

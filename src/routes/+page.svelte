<script>
	import { onMount } from 'svelte'
	import { assets } from '$app/paths'

	import Nav from '$lib/Nav.svelte'
	import Body from '$lib/Body.svelte'
	import UploadButton from '$lib/UploadButton.svelte'
	import Logout from '$lib/Logout.svelte'
	import Search from '$lib/Search.svelte'
	import Pager from '$lib/Pager.svelte'
	import Login from '$lib/Login.svelte'
	import Grid from '$lib/Grid.svelte'
	import Card from '$lib/Card.svelte'
	import Link from '$lib/Link.svelte'
	import Button from '$lib/Button.svelte'
	import CircularProgress from '$lib/CircularProgress.svelte'

	import { pb, currentUser, thumbnail } from '$lib/pocketbase.js'
	import { fragment, fragmentVar, rehash } from '$lib/fragment.js'

	let files = null

	const page = fragmentVar('page', 1, (v) => Number(v))
	const filter = fragmentVar('filter', '')

	async function loadFiles(options = {}) {
		if (files != null) {
			await files
		}

		files = pb.collection('files').getList($page, 30, {
			sort: '-created',
			filter: `name~"${encodeURIComponent($filter)}"`,
			...options,
		})
	}

	function search(ev) {
		// TODO: This seems to cause two entries to be added to the
		// browser's history.
		const { detail: f } = ev
		$page = 1
		$filter = f
	}

	$: if ($currentUser) {
		let changed = false
		if (!isNaN($page)) {
			changed = true
		}
		if ($filter) {
			changed = true
		}

		if (changed) {
			loadFiles()
		}
	}
</script>

<Nav>
	<svelte:fragment slot="start">
		{#if $currentUser}
			<UploadButton on:upload={() => ($page = 1)} />
		{/if}
	</svelte:fragment>

	<Search slot="middle" value={$filter} on:submit={search} />

	<Logout slot="end" />
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
					<Link href="/view/{file.id}">
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

			<Pager bind:page={$page} pages={files.totalPages} />
		{/await}
	{:else}
		<Login />
	{/if}
</Body>

<script>
	import { onMount } from 'svelte'
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

	import { pb, currentUser, thumbnail } from '$lib/pocketbase.js'
	import { fragment, fragmentVar, rehash } from '$lib/fragment.js'

	let files = null

	const page = fragmentVar('page', 1, (v) => parseInt(v, 10))
	const filter = fragmentVar('filter', '')

	function logout(ev) {
		pb.authStore.clear()
	}

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
		<Link class="hover:opacity-50 transition-all" href="/">
			<img class="max-h-8" src="{assets}/favicon.png" alt="PocketSafe" />
		</Link>
		{#if $currentUser}
			<UploadButton on:upload={() => ($page = 1)} />
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="middle">
		<Search on:submit={search} />
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

			<Pager bind:page={$page} pages={files.totalPages} />
		{/await}
	{:else}
		<Login />
	{/if}
</Body>

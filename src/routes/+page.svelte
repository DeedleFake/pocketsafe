<script>
	import Link from '$lib/Link.svelte'
	import Card from '$lib/Card.svelte'
	import Grid from '$lib/Grid.svelte'
	import Button from '$lib/Button.svelte'
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

{#if !$currentUser}
	<Button href="/login">Login</Button>
{:else}
	<Button on:click={logout}>Logout</Button>
	<h2>Greetings, {$currentUser.username}.</h2>

	{#await files}
		Loading...
	{:then files}
		{#if files.totalItems == 0}
			No files.
		{/if}
		<Button on:click={() => fileInput.click()}>Add</Button>
		<Grid>
			<input
				type="file"
				class="hidden"
				bind:this={fileInput}
				bind:files={newFiles}
			/>
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
{/if}

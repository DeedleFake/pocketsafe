<script>
	import Link from '$lib/Link.svelte'
	import Card from '$lib/Card.svelte'
	import Grid from '$lib/Grid.svelte'
	import { pb, currentUser, assertLogin } from '$lib/pocketbase.js'

	let files = null
	let fileInput = null
	let newFiles = null

	$: if (newFiles) {
		upload()
	}

	function logout(ev) {
		ev.preventDefault()
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

	$: if ($currentUser) {
		loadFiles()
	}
</script>

{#if !$currentUser}
	<Link button href="/login">Login</Link>
{:else}
	<Link button on:click={logout}>Logout</Link>
	<h2>Greetings, {$currentUser.username}.</h2>

	{#await files}
		Loading...
	{:then files}
		{#if files.totalItems == 0}
			No files.
		{/if}
		<Link button on:click={() => fileInput.click()}>Add</Link>
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
						<img
							slot="image"
							src={pb.files.getUrl(file, file.file, { thumb: '96x96f' })}
							alt={file.name}
						/>
					</Card>
				</Link>
			{/each}
		</Grid>
	{/await}
{/if}

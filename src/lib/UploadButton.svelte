<script>
	import { createEventDispatcher } from 'svelte'

	import Button from '$lib/Button.svelte'

	import { pb, currentUser } from '$lib/pocketbase.js'

	const dispatch = createEventDispatcher()

	let input = null
	let files = null

	async function upload() {
		let uploads = []
		for (const file of files) {
			uploads.push(
				pb.collection('files').create({
					name: file.name,
					file: file,
					owner: $currentUser.id,
				}),
			)
		}
		await Promise.all(uploads)

		dispatch('upload', files)
		files = null
	}

	$: if (files) {
		upload()
	}
</script>

<Button on:click={() => input.click()}>Upload</Button>
<input type="file" class="hidden" bind:this={input} bind:files />

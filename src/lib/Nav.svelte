<script>
	import { assets } from '$app/paths'
	import Link from '$lib/Link.svelte'

	export let logo = true
</script>

<div
	class="
		min-h-8
		p-2
		flex
		flex-row
		justify-between
		outline
		outline-2
		outline-slate-300
		dark:outline-slate-700
	"
>
	<div class="flex flex-row gap-2 items-center">
		{#if logo}
			<Link class="hover:opacity-50 transition-all" href="/">
				<img class="max-h-8" src="{assets}/favicon.png" alt="PocketSafe" />
			</Link>
		{/if}
		<slot name="start" />
	</div>
	<div class="flex flex-row gap-2 items-center"><slot name="middle" /></div>
	<div class="flex flex-row gap-2 items-center"><slot name="end" /></div>
</div>

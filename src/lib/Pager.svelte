<script>
	import { createEventDispatcher } from 'svelte'

	import Link from '$lib/Link.svelte'

	const dispatch = createEventDispatcher()

	export let page = 1
	export let pages = 1

	$: if (page > pages) {
		select(null, pages)
	}

	function select(ev, p) {
		ev?.preventDefault()
		page = p
		dispatch('change', p)
	}
</script>

<div class="flex flex-row justify-between items-center gap-4">
	{#if page !== 1}
		<Link on:click={(ev) => select(ev, 1)}>1</Link>
		<div>...</div>
	{/if}
	{#each [page - 2, page - 1, page, page + 1, page + 2] as p}
		{#if p === page}
			<div>{page}</div>
		{:else if p > 1 && p < pages}
			<Link on:click={(ev) => select(ev, p)}>{p}</Link>
		{/if}
	{/each}
	{#if page !== pages}
		<div>...</div>
		<Link on:click={(ev) => select(ev, pages)}>{pages}</Link>
	{/if}
</div>

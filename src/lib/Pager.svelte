<script>
	import { createEventDispatcher } from 'svelte'

	import Link from '$lib/Link.svelte'

	const dispatch = createEventDispatcher()

	export let current
	export let pages

	export let page = 1

	function select(ev, p) {
		ev.preventDefault()
		page = p
		dispatch('change', p)
	}
</script>

<div class="flex flex-row justify-between items-center gap-4">
	{#if current !== 1}
		<Link on:click={(ev) => select(ev, 1)}>1</Link>
		<div>...</div>
	{/if}
	{#each [current - 2, current - 1, current, current + 1, current + 2] as p}
		{#if p === current}
			<div>{current}</div>
		{:else if p > 1 && p < pages}
			<Link on:click={(ev) => select(ev, p)}>{p}</Link>
		{/if}
	{/each}
	{#if current !== pages}
		<div>...</div>
		<Link on:click={(ev) => select(ev, pages)}>{pages}</Link>
	{/if}
</div>

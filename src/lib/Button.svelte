<script>
	import { createEventDispatcher } from 'svelte'
	import { goto } from '$app/navigation'

	export let href = null
	export let secondary = false

	let extraStyle = ''
	export { extraStyle as class }

	$: mode = secondary
		? `
			bg-teal-500
			border-teal-400
			hover:bg-teal-600
			hover:border-teal-500
			active:bg-teal-700
			active:border-teal-600
			disabled:bg-teal-200
			disabled:text-teal-700
			disabled:border-teal-300
			`
		: `
			bg-cyan-500
			border-cyan-400
			hover:bg-cyan-600
			hover:border-cyan-500
			active:bg-cyan-700
			active:border-cyan-600
			disabled:bg-cyan-200
			disabled:text-cyan-700
			disabled:border-cyan-300
			`

	const dispatch = createEventDispatcher()

	async function click(ev) {
		const ok = dispatch('click', ev, { cancelable: true })
		if (ok && href) {
			await goto(href)
		}
	}
</script>

<button
	class="px-2 border-4 rounded-2xl text-white transition-all {mode} {extraStyle}"
	{...$$restProps}
	on:click={click}
>
	<slot />
</button>

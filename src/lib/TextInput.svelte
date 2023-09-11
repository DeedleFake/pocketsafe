<script>
	export let password = false

	export let value = ''

	const style = `
		px-2
		py-1
		rounded-2xl
		border-4
		transition-all
		text-slate-100
		outline-none
		border-cyan-500
		dark:text-slate-800
		hover:border-cyan-600
		focus:border-cyan-700
		disabled:bg-cyan-200
		disabled:text-cyan-700
		disabled:border-cyan-300
	`
</script>

{#if password}
	<input type="password" class={style} bind:value {...$$restProps} />
{:else}
	<input type="text" class={style} bind:value {...$$restProps} />
{/if}

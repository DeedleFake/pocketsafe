<script>
	export let password = false

	export let value = ''
</script>

{#if password}
	<input
		type="password"
		class="px-4 py-2 ring rounded-lg"
		bind:value
		{...$$restProps}
	/>
{:else}
	<input
		type="text"
		class="px-4 py-2 ring rounded-lg"
		bind:value
		{...$$restProps}
	/>
{/if}

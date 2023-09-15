<script>
	export let href = '' // The build complains otherwise.

	let extraStyle = ''
	export { extraStyle as class }
</script>

<a
	class="text-cyan-500 hover:text-cyan-600 active:text-cyan-700 transition-all {extraStyle}"
	{href}
	{...$$restProps}
	on:click
>
	<slot />
</a>

<script>
	export let href = '' // The build complains otherwise.

	$: extraStyle = $$props['class'] ?? ''
</script>

<a
	class="text-cyan-500 hover:text-cyan-600 active:text-cyan-700 {extraStyle}"
	{href}
	{...$$restProps}
>
	<slot />
</a>

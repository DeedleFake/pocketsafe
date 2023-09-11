<script>
	$: extraStyle = $$props['class'] ?? ''
</script>

<a
	class="text-cyan-500 hover:text-cyan-600 active:text-cyan-700 {extraStyle}"
	{...$$restProps}
	on:click
>
	<slot />
</a>

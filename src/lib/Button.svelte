<script>
	export let secondary = false

	$: style = 'btn ' + (secondary ? 'btn-secondary' : 'btn-primary')
	$: extraStyle = $$props['class'] ?? ''
</script>

<button class="{style} {extraStyle}" {...$$restProps}>
	<slot />
</button>

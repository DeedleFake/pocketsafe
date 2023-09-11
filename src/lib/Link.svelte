<script>
	export let href = '#'
	export let button = false
	export let secondary = false

	$: style = button
		? 'btn ' + (secondary ? 'btn-secondary' : 'btn-primary')
		: 'text-cyan-500 hover:text-cyan-700 active:text-cyan-600'
	$: extraStyle = $$props['class'] ?? ''
</script>

<a class="{style} {extraStyle}" {href} {...$$restProps} on:click>
	<slot />
</a>

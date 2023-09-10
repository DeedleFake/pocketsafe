<script>
	export let href = '#'
	export let button = false

	const style = button ? 'btn-primary' : ''
</script>

<a class={style} {href} {...$$restProps} on:click>
	<slot />
</a>

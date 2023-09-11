<script>
	export let href = '#'
	export let button = false

	const style = button
		? 'btn-primary'
		: 'text-sky-500 hover:text-sky-700 active:text-sky-600'
</script>

<a class={style} {href} {...$$restProps} on:click>
	<slot />
</a>

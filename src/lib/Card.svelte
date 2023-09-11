<script>
	export let size = 'md'

	$: sizeStyle =
		{
			sm: 'w-24 h-24',
			md: 'w-48 h-48',
			lg: 'w-96 h-96',
		}[size] ?? 'w-48 h-48'
	$: extraStyle = $$props['class']
</script>

<div class="{sizeStyle} flex flex-col p-2 rounded-lg shadow-lg {extraStyle}">
	<div class="flex grow justify-center items-center">
		<slot name="image" />
	</div>
</div>

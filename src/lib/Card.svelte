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

<div
	class="
		flex
		flex-col
		p-2
		gap-2
		rounded-2xl
		shadow-lg
		bg-slate-100
		dark:bg-slate-900
		dark:shadow-none
		dark:outline
		dark:outline-2
		dark:outline-cyan-900
		{sizeStyle}
		{extraStyle}
	"
>
	<div class="flex grow justify-center items-center overflow-hidden">
		<slot name="image" />
	</div>
	{#if $$slots['subtitle']}
		<div class="flex flex-col items-center overflow-x-auto">
			<slot name="subtitle" />
		</div>
	{/if}
</div>

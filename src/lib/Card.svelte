<script>
	export let size = 'md'

	let extraStyle = ''
	export { extraStyle as class }

	$: sizeStyle =
		{
			sm: 'w-24 h-24',
			md: 'w-48 h-48',
			lg: 'w-96 h-96',
		}[size] ?? 'w-48 h-48'
</script>

<div
	class="
		group
		flex
		flex-col
		p-2
		gap-2
		rounded-2xl
		shadow-lg
		bg-slate-100
		transition-all
		dark:bg-slate-900
		dark:outline
		dark:outline-2
		dark:outline-cyan-900
		hover:shadow-xl
		{sizeStyle}
		{extraStyle}
	"
>
	<div
		class="
		 flex
		 flex-col
		 grow
		 justify-center
		 items-stretch
		 rounded-lg
		 overflow-hidden
		 transition-all
		 group-hover:opacity-80
		"
	>
		<slot name="image" />
	</div>
	{#if $$slots['subtitle']}
		<div class="flex flex-col items-center overflow-x-auto">
			<slot name="subtitle" />
		</div>
	{/if}
</div>

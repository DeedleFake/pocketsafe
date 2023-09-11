<div
	class="
		min-h-8
		p-2
		flex
		flex-row
		justify-between
		outline
		outline-2
		outline-slate-300
		dark:outline-slate-700
	"
>
	<div class="flex flex-row gap-2 items-center"><slot name="start" /></div>
	<div class="flex flex-row gap-2 items-center"><slot name="middle" /></div>
	<div class="flex flex-row gap-2 items-center"><slot name="end" /></div>
</div>

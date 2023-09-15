<script>
	let extraStyle = ''
	export { extraStyle as class }
</script>

<div
	class="flex flex-row flex-wrap justify-center items-start gap-4 {extraStyle}"
>
	<slot />
</div>

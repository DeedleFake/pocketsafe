<script>
  let num = 0
</script>

<button
  class="px-4 py-2 text-white bg-sky-500 rounded-full hover:bg-sky-700 active:bg-sky-600"
  on:click={() => {
    num++
  }}
>
  Clicked: {num}
</button>

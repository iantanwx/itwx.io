<script lang="ts">
  import Player from 'svelte-video-player'

  let color = '#D95979'
  let height;
  let width;

  export let source;
</script>

<div class="my-2">
  <Player {color} {height} {width} {source} />
</div>

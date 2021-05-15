<script lang="ts">
  import { onMount } from 'svelte';
  let Player;
  onMount(async () => {
    const module = await import('svelte-video-player');
    Player = module.default;
  });
  export let source;
</script>

{#if Player}
  <Player {source} />
{/if}

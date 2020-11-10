<script lang="ts">
  import { viewed } from './stores';

  import Title from './Title.svelte';
  import Timeline from './Timeline.App.svelte';
</script>

{#each $viewed as view}
  <svelte:component this={view} />
{/each}

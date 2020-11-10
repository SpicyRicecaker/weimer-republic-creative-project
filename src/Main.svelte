<script lang="ts">
  import { viewed } from './stores';
</script>

<style lang="scss">
  @import 'styles/page.scss';
</style>

{#each $viewed as view}
  <svelte:component this={view} />
{/each}

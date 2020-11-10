<script lang="ts">
  import { viewed } from './stores';
</script>

<style lang="scss">
  @import 'styles/page.scss';
</style>

<div class="main">
  {#each $viewed as view}
    <svelte:component this={view} />
  {/each}
</div>

<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import Nav from './Nav.svelte';
  interface viewItem {
    label: string;
    value: number;
    component: typeof SvelteComponent;
  }
  interface viewItems extends Array<viewItem> {}
  export let views: viewItems;
  export let activeView = 0;
</script>

<style lang="scss">
  // .main {
  //   width: 100%;
  //   height: 100%;
  //   // display: flex;
  //   // flex-direction: column;
  // }
  // div {
  //   // flex: 1;
  //   // overflow: auto;
  // }
</style>

<!-- <Nav {views} bind:activeView /> -->
{#each views as view}
  {#if activeView === view.value}
    <svelte:component this={view.component} />
  {/if}
{/each}

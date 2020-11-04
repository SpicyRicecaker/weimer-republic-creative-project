<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  // import Hyperinflation from './hyperinflation.svelte';
  import Title from './Title.svelte';

  // The way we're storing components
  interface viewItem {
    label: string;
    value: number;
    component: typeof SvelteComponent;
  }

  // Define our viewlist as an array of components
  interface viewItems extends Array<viewItem> {}

  // View starts off with title screen
  let views: viewItems = [
    {
      label: 'Title',
      value: 0,
      component: Title,
    },
  ];

  // const views: viewItems = [
  //   {
  //     label: 'Translate',
  //     value: 0,
  //     component: Translate,
  //   },
  //   {
  //     label: 'Options',
  //     value: 1,
  //     component: Options,
  //   },
  // ];
</script>

<style lang="scss">
  :global(body) {
    background-color: #2b2b2b;
    margin: 0;
    padding: 0;
  }
  main {
    height: 100%;
    width: 100%;
    max-width: 240px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
    rel="stylesheet" />
</svelte:head>

<main>
  {#each views as view}
    <svelte:component this={view.component} bind:views />
  {/each}
</main>

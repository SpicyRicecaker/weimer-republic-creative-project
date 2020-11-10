<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { onMount } from 'svelte';
  import { viewed, viewedRight } from './stores';

  // Tabbed view, created from mageX
  import Tab from './Tab.svelte';

  // Middle page
  import Title from './Title.svelte';
  import Main from './Main.svelte';
  // Right page
  import Hyperinflation from './Hyperinflation.svelte';
  import Right from './Right.svelte';
  // Left page
  import FourtyEight from './FourtyEight.svelte';

  // The way we're storing components
  interface viewItem {
    label: string;
    value: number;
    component: typeof SvelteComponent;
  }

  // Define our viewlist as an array of components
  interface viewItems extends Array<viewItem> {}

  // View starts off with title screen,
  // Contains left and right page
  let views: viewItems = [
    {
      label: 'Main',
      value: 0,
      component: Main,
    },
    {
      label: 'Right',
      value: 1,
      component: Right,
    },
    {
      label: 'FourtyEight',
      value: 2,
      component: FourtyEight,
    },
  ];

  // Onmount add title to the svelte view
  onMount(() => {
    $viewed = [Title];
    $viewedRight = [Hyperinflation];
  });
</script>

<style lang="scss">
  :global(body) {
    background-color: #2b2b2b;
    margin: 0;
    padding: 0;

    /* The emerging W3C standard
   that is currently Firefox-only */
    scrollbar-width: thin;
    scrollbar-color: #2b2b2b gray;

    /* Works on Chrome/Edge/Safari */
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-track {
      background: #2b2b2b;
    }
    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 1rem;
      // border: 3px solid orange;
    }
  }

  main {
    height: 100%;
    width: 100%;
    // max-width: 240px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<!-- <svelte:head>
</svelte:head> -->

<main>
  <Tab {views} />
</main>

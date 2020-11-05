<script lang="ts">
  import { tick } from 'svelte';

  import { slide } from 'svelte/transition';
  import FourtyEight from './FourtyEight.svelte';
  export let views;
</script>

<style lang="scss">
  @use 'styles/page';
</style>

<div class="main">
  <h2>Loss of Faith</h2>
  <ul>
    <li>life savings gone up in flames</li>
    <li>the <i>belief</i> in hard work destroyed</li>
    <li>disbelief breeds indifference, which makes extremism more feasible</li>
  </ul>

  <button
    class="next-button"
    on:click|once={async () => {
      views = [...views, { label: 'FourtyEight', value: 0, component: FourtyEight }];
      await tick();
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }}>&#8595;</button>
</div>

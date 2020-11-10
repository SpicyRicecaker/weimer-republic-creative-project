<script lang="ts">
  import { tick } from 'svelte';
  import Hyperinflation from './Hyperinflation.svelte';
  import Timeline from './Timeline.svelte';

  let displayTimeline = false;
</script>

<style lang="scss">
  @use 'styles/page';
  h1 {
    text-align: center;
    font-family: 'Bebas Neue', cursive;
    color: white;
    /* text-transform: uppercase; */
    font-size: 4rem;
    font-weight: 100;
  }
</style>

<div class="main">
  <h1>
    The Fall of the Weimar Republic
    <div style="font-size: 1rem; font-weight: normal; font-family: arial">
      by Andy Li
    </div>
  </h1>
  <!-- <p>by Andy Li</p> -->
  <button
    class="next-button"
    on:click|once={async () => {
      console.log(document.body.scrollHeight);
      displayTimeline = true;
      await tick();
      console.log(document.body.scrollHeight);
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }}>&#8595;</button>
</div>

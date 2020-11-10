<script lang="ts">
  import { viewed, noTitleExpansion } from './stores';

  import { tick } from 'svelte';

  import Timeline from './Timeline.svelte';

  const addTimeline = async () => {
    // If we haven't already added the timeline
    if ($noTitleExpansion) {
      // Add the timeline to viewed
      $viewed = [...$viewed, Timeline];
      // Scrolldown if possible
      await tick();
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
      // Then update the behavior to not add timeline anymore
      $noTitleExpansion = !$noTitleExpansion;
    }
  };
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
  <button class="next-button" on:click|once={addTimeline}>&#8595;</button>
</div>

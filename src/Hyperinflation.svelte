<script lang="ts">
  import Chart from './Chart.svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import type { get } from 'svelte/store';
  let time;

  let content: Map<number, string> = new Map();
  content.set(0, 'Antebellum Germany');
  content.set(1, 'Postbellum Germany');
  content.set(
    10,
    "In January of 1923, the French invaded Germany and occupied its factories as they didn't believe Germany couldn't make the reparation payments. In addition to domestic insecurities, the government panicked and started to print money."
  );

  // let currentContent;
  $:currentContent = content.get(time);
  // const getContent = (num: number) => {
  //   const b = content.get(num);
  //   return b ? b : '';
  // };
</script>

<style lang="scss">
  .main {
    height: 90%;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 2rem;
    font-weight: 100;
  }
  
  p {
    width: 30%;
  }
</style>

<div class="main">
  <h2>Money is a <i>Belief</i></h2>
  {#if currentContent}
    <p transition:slide|local>{currentContent}</p>
  {/if}
  <!-- <h2>Value of marks over time</h2> -->
  <Chart bind:time />
  <p />
  {#if time === 12}
    <div>
      <ul>
        <li>life savings gone up in flames</li>
        <li>hard work destroyed</li>
        <li>loss of capacity of surprise</li>
      </ul>
    </div>
  {/if}
</div>

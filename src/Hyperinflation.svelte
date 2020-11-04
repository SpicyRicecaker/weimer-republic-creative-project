<script lang="ts">
  import Chart from './Chart.svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import type { get } from 'svelte/store';
  import type { current_component } from 'svelte/internal';

  // Everywhere else there should be nothing
  let contentMap: Map<number, string> = new Map();
  contentMap.set(0, 'Antebellum Germany: Prosperous, 4 marks to the dollar');
  contentMap.set(
    1,
    'Postbellum Germany: Treaty of Versailles, start of reparation payments'
  );
  contentMap.set(
    8,
    "In January of 1923, the French invaded Germany and occupied its factories. They didn't believe Germany couldn't make the reparation payments. In fear of high unemployment leading to a revolution, the government panicked and started to print money."
  );

  let contentList: string[] = [];

  let time = 0;
  let pastIndex = 0;

  const getMods = (newIndex: number) => {
    // Find the difference between current and past
    const diff = time - pastIndex;
    let sign = diff > 0 ? 1 : -1;
    // Collect all "diffs" between now and diff
    let diffs = 0;
    while (pastIndex !== newIndex) {
      const t = contentMap.get(pastIndex);
      if (t) {
        if (sign === 1) {
          contentList.push(t);
        } else {
          contentList.pop();
        }
      }
      pastIndex += sign;
    }
    return contentList;
  };

  $: contentList = getMods(time);
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

  .mainpre {
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
    margin: 0;
    padding: 0;
  }

  .center {
    flex: 1;
  }
</style>

<div class="mainpre">
  <h2>"All Money is a matter of <i>Belief"</i><sup>[src]</sup></h2>
  {#each contentList as content}
    <p transition:slide>
      {@html content}
    </p>
  {/each}
</div>
<div class="main">
  <!-- <h2>Value of marks over time</h2> -->
  <Chart bind:time />
</div>
{#if time === 12}
  <div>
    <ul>
      <li>life savings gone up in flames</li>
      <li>hard work destroyed</li>
      <li>loss of capacity of surprise</li>
    </ul>
  </div>
{/if}

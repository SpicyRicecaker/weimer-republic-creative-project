<script lang="ts">
  import { tick } from 'svelte';
  import Chart from './Chart.svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import FourtyEight from './FourtyEight.svelte';
  import EndResult from './EndResult.svelte';

  export let views;
  // Everywhere else there should be nothing
  let contentMap: Map<number, string> = new Map();
  contentMap.set(
    0,
    // 'Antebellum Germany had a prosperous economy, with the value of marks priced 4 to the dollar'
    'Antebellum Germany had a great economy with currency that was indexed to gold. (drag slider to continue)'
  );
  contentMap.set(
    1,
    // 'The economy of postbellum Germany was heavily affected by Treaty of Versailles, which lead to the start of reparation payments...'
    'Postbellum Germany saw the forced terms of the treaty of versailles along with the start of reparation payments'
  );
  contentMap.set(
    10,
    // "In January of 1923, the French invaded Germany and occupied its factories. They didn't believe Germany couldn't make the reparation payments. In fear of high unemployment leading to a revolution, the government panicked and started to print money."
    'Germany starts <b>mass printing money</b> to pay workers on strike against the French, who they missed a reparation payment to.'
  );

  let contentList: string[] = [contentMap.get(0)];

  let time = 0;
  let pastIndex = 0;

  const getMods = (newIndex: number) => {
    // Find the difference between current and past
    const diff = time - pastIndex;
    // console.log(time, pastIndex);
    if (diff > 0) {
      while (pastIndex !== time) {
        const b = contentMap.get(pastIndex + 1);
        if (b) {
          contentList.push(b);
        }
        pastIndex += 1;
      }
    } else {
      while (pastIndex !== time) {
        const b = contentMap.get(pastIndex);
        if (b) {
          contentList.pop();
        }
        pastIndex -= 1;
      }
    }
    return contentList;
  };

  $: contentList = getMods(time);
</script>

<style lang="scss">
  @use 'styles/page';

  .mainpre {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  // .mainend {
  //   color: white;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  // }

  h2 {
    font-size: 2rem;
    font-weight: 100;
  }

  .dialogue {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    width: 30%;
    margin: 1rem;
    padding: 0;
  }


  .center {
    flex: 1;
  }

  .main2 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    p {
      width: 90%;
    }
  }
</style>

<div class="mainpre">
  <h2>
    " All Money is a matter of
    <i>Belief "</i>
    <sup style="font-size:.8rem; color: lightblue;">[1]</sup>
  </h2>
  <!-- <div class="dialogue"> -->
    {#each contentList as content}
      <p transition:slide|local>
        {@html content}
      </p>
    {/each}
  <!-- </div> -->
  {#if time === 12}
    <button
      transition:slide|local
      class="next-button"
      on:click|once={async () => {
        views = [...views, { label: 'Hyperinflation2', value: 0, component: EndResult }];
        await tick();
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      }}>&#8595;</button>
  {/if}
</div>

<div class="main2">
  <!-- <div class="main"> -->
  <!-- <h2>Value of marks over time</h2> -->
  <Chart bind:time />
</div>

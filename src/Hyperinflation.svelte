<script lang="ts">
  import Chart from './Chart.svelte';
  import Piggy from './Piggy.svelte';
  import { viewedRight, noPiggyBank } from './stores'
  import { tick } from 'svelte';
  import { slide } from 'svelte/transition';

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
    'Start of reparation payments'
  );
  contentMap.set(
    10,
    // "In January of 1923, the French invaded Germany and occupied its factories. They didn't believe Germany couldn't make the reparation payments. In fear of high unemployment leading to a revolution, the government panicked and started to print money."
    'Germany starts <b>mass printing money</b> to pay workers on strike against the French, who they missed a reparation payment to.'
  );

  // const pieceWise = (num: number) => {
  //   if (num === 0) {
  //     return contentMap.get(0);
  //   }
  //   if (num <= 9) {
  //     return contentMap.get(1);
  //   } else {
  //     return contentMap.get(10);
  //   }
  // };

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
          contentList.unshift(b);
        }
        pastIndex += 1;
      }
    } else {
      while (pastIndex !== time) {
        const b = contentMap.get(pastIndex);
        if (b) {
          contentList.shift();
        }
        pastIndex -= 1;
      }
    }
    return contentList;
  };

  $: contentList = getMods(time);

  const addTimeline = async () => {
    // If we haven't already added the timeline
    if ($noPiggyBank) {
      // Add the timeline to viewed
      $viewedRight = [...$viewedRight, Piggy];
      // Scrolldown if possible
      await tick();
      // Then update the behavior to not add timeline anymore
      $noPiggyBank = !$noPiggyBank;
    }
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
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

  // .dialogue {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  // }

  .next {
    color: white;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    height: 5rem;
    overflow-y: hidden;
  }

  p {
    width: 40%;
    margin: 0rem auto 2rem;
    padding: 0;
  }

  // .center {
  //   flex: 1;
  // }

  .main2 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wrapper {
    // display: grid;
    // grid-template-columns: 3rem auto;
    width: 100%;
    height: 100%;
  }

  .content {
    align-self: center;
    overflow-y: auto;
  }

  .down-arrow-wrapper {
    width: 5%;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    p {
      width: 90%;
    }
  }
</style>

<div class="wrapper">
  <div class="content">
    <div class="mainpre">
      <h2>
        " All Money is a matter of
        <i>Belief "</i>
        <sup style="font-size:.8rem; color: lightblue;">[1]</sup>
      </h2>
    </div>
    <div class="main2">
      <!-- <div class="main"> -->
      <!-- <h2>Value of marks over time</h2> -->
      <Chart bind:time />
    </div>
    <div class="next">
      {#if time === 12}
        <div class="down-arrow-wrapper" transition:slide|local>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44.75 33.96"><defs>
              <style lang="scss">
                #a03601eb-7637-408e-8bad-43a3e0764bf4 {
                  &:hover {
                    cursor: pointer;
                    & .beb75892-66f5-47c4-b470-7813872abcba {
                      stroke: #f1c232;
                      transform: translateY(15%);
                    }
                  }
                }
                .b1c674fd-2163-406c-ba94-57fe9e46624f {
                  fill: #2b2b2b;
                  opacity: 0;
                }
                .beb75892-66f5-47c4-b470-7813872abcba {
                  fill: none;
                  stroke: #fff;
                  stroke-miterlimit: 10;

                  transition: transform 0.2s;
                }
              </style>
            </defs>
            <g
              id="a03601eb-7637-408e-8bad-43a3e0764bf4"
              data-name="Layer 2"
              on:click={addTimeline}>
              <g
                id="af10db1e-7aba-4242-a670-917638a5d88d"
                data-name="Hyperinflationo">
                <rect
                  class="b1c674fd-2163-406c-ba94-57fe9e46624f"
                  width="44.75"
                  height="33.96" />
                <polyline
                  class="beb75892-66f5-47c4-b470-7813872abcba"
                  points="3.7 6.1 22.08 18.07 40.47 6.1" />
                <polyline
                  class="beb75892-66f5-47c4-b470-7813872abcba"
                  points="3.7 15.81 22.08 27.79 40.47 15.81" />
              </g>
            </g></svg>
        </div>
      {/if}
      {#each contentList as content (content)}
        <p transition:slide|local>
          {@html content}
        </p>
      {/each}
    </div>
  </div>
</div>

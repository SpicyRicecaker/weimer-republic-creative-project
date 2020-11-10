<script lang="ts">
  import { noPeople, viewedLeft } from './stores';
  import People from './People.svelte';
  import { tick } from 'svelte';
  const addPeople = async () => {
    // If we haven't already added the timeline
    if ($noPeople) {
      // Add the timeline to viewed
      $viewedLeft = [...$viewedLeft, People];
      // Scrolldown if possible
      await tick();
      // Then update the behavior to not add timeline anymore
      $noPeople = !$noPeople;
    }
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
</script>

<style lang="scss">
  @use 'styles/page';
  @use 'styles/lemon-milk.scss';

  h2 {
    font-family: 'LEMON MILK';
  }
  
  .down-arrow-wrapper {
    width: 5%;
    margin: 0 auto;
  }
</style>

<div class="main">
  <h2>The Great Depression</h2>
  <div>
    In 1929 the U.S. stock market crashed, and investors asked for their money
    back from Germany.
  </div>
  <div>What did the government do to help its people?</div>
  <div class="down-arrow-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.75 33.96"><defs>
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
        on:click={addPeople}>
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
</div>

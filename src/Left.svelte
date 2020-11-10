<script lang="ts">
  import { activeView, viewedLeft } from './stores';
</script>

<style lang="scss">
  .back {
    position: fixed; /* Set the navbar to fixed position */
    right: 0; /* Position the navbar at the top of the page */
    height: 100%;
    // top: 0;
    // width: 100%;
    width: 1.5rem;
    // height: 1rem;
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>

<div class="back">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.96 44.75"><defs>
      <style lang="scss">
        .ebe2baaf-a2ba-4012-9452-a6e7b729abf2 {
          fill: #2b2b2b;
          opacity: 0;
        }
        .a8a30843-d639-4ca4-ab05-e0a6aafc651f {
          fill: none;
          stroke: #fff;
          stroke-miterlimit: 10;
        }
        #a6b7e4a0-cd01-4de0-9767-4a7053ac3c7d {
          &:hover {
            cursor: pointer;
            & .a8a30843-d639-4ca4-ab05-e0a6aafc651f {
              stroke: #f1c232;
              transform: rotate(180deg) translateX(-45%);
            }
          }
        }
        .a8a30843-d639-4ca4-ab05-e0a6aafc651f {
          transform-origin: center;
          transform-box: fill-box;
          transform: rotate(180deg);
          transition: transform 0.2s;
        }
      </style>
    </defs>
    <g
      id="a6b7e4a0-cd01-4de0-9767-4a7053ac3c7d"
      data-name="Layer 2"
      on:click={() => ($activeView = 0)}>
      <g id="ada5ea39-6e38-4be9-951c-ce014bef0d06" data-name="Hyperinflationo">
        <rect
          class="ebe2baaf-a2ba-4012-9452-a6e7b729abf2"
          x="-5.4"
          y="5.4"
          width="44.75"
          height="33.96"
          transform="translate(39.36 5.4) rotate(90)" />
        <polyline
          class="a8a30843-d639-4ca4-ab05-e0a6aafc651f"
          points="27.86 3.7 15.89 22.08 27.86 40.47" />
        <polyline
          class="a8a30843-d639-4ca4-ab05-e0a6aafc651f"
          points="18.15 3.7 6.17 22.08 18.15 40.47" />
      </g>
    </g></svg>
</div>
{#each $viewedLeft as view}
  <svelte:component this={view} />
{/each}

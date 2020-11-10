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

  .title-wrapper {
    width: 50%;
  }
</style>

<div class="main">
  <div class="title-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 247.48 68.25"><defs>
        <style lang="scss">
          @use 'styles/lemon-milk';
          .cls-1,
          .cls-2,
          .cls-4,
          .cls-5 {
            fill: #fff;
          }
          .cls-2 {
            font-size: 25px;
          }
          .cls-2,
          .cls-4,
          .cls-5 {
            font-family: LEMONMILK-Regular, LEMON MILK;
          }
          .cls-3 {
            letter-spacing: -0.1em;
          }
          .cls-4 {
            font-size: 11px;
          }
          .cls-5 {
            font-size: 10.69px;
          }
        </style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Hyperinflationo">
          <g id="title-author">
            <path
              class="cls-1"
              d="M97.63,56.9h.6v3.85a2.07,2.07,0,0,1,2-1.16c1.41,0,2.46,1.17,2.46,3s-.94,3.28-2.62,3.28a1.86,1.86,0,0,1-1.89-1.09c0,.38,0,.78,0,.95h-.58c0-.69,0-1.37,0-2.06Zm4.47,5.72c0-1.5-.74-2.46-1.88-2.46-1.5,0-2,1-2,2.59,0,1.41.47,2.57,2,2.57C101.36,65.32,102.1,64.31,102.1,62.62Z" />
            <path
              class="cls-1"
              d="M104.18,59.74c1.21,3.43,1.74,4.84,1.94,5.49h0c.25-.73.72-2.12,1.89-5.49h.62l-2.25,6.34c-.64,1.78-1.07,2.17-2.15,2.17a4.68,4.68,0,0,1-.55,0v-.6a4.75,4.75,0,0,0,.54,0c.86,0,1.14-.42,1.58-1.65l-2.29-6.26Z" />
            <path
              class="cls-1"
              d="M114,62.83l-1.07,2.91h-.66l3.09-8.4h.76l3.22,8.4h-.71l-1.09-2.91Zm3.32-.6c-.93-2.49-1.41-3.69-1.58-4.25h0c-.21.63-.74,2.12-1.5,4.25Z" />
            <path
              class="cls-1"
              d="M120.61,61.25c0-.53,0-1,0-1.51h.58a11,11,0,0,1,0,1.14,2,2,0,0,1,2-1.29c1.07,0,2,.6,2,2.26v3.89h-.6V62c0-1.07-.44-1.77-1.48-1.77-1.43,0-1.92,1.19-1.92,2.5v3.06h-.6Z" />
            <path
              class="cls-1"
              d="M131.81,56.9V64c0,.57,0,1.13,0,1.73h-.58c0-.15,0-.71,0-1a2,2,0,0,1-2,1.15c-1.56,0-2.5-1.27-2.5-3.07s1-3.22,2.65-3.22c1.2,0,1.68.52,1.86.9V56.9Zm-4.47,5.89c0,1.64.85,2.53,1.88,2.53,1.59,0,2-1.1,2-2.73s-.37-2.43-1.91-2.43C128.14,60.16,127.34,61.11,127.34,62.79Z" />
            <path
              class="cls-1"
              d="M133.75,59.74c1.21,3.43,1.74,4.84,1.94,5.49h0c.24-.73.72-2.12,1.89-5.49h.62L136,66.08c-.63,1.78-1.06,2.17-2.14,2.17a4.68,4.68,0,0,1-.55,0v-.6a4.63,4.63,0,0,0,.54,0c.86,0,1.13-.42,1.58-1.65l-2.29-6.26Z" />
            <path class="cls-1" d="M142.68,57.34h.64v7.8h4.51l-.12.6h-5Z" />
            <path
              class="cls-1"
              d="M149.25,56.9h.6v1.16h-.6Zm0,2.84h.6v6h-.6Z" />
            <g id="title">
              <text class="cls-2" transform="translate(14.12 48.5)">
                Weimar Republic
              </text>
              <text class="cls-2" transform="translate(0 22.34)">
                <tspan class="cls-3">F</tspan>
                <tspan x="11.73" y="0">all</tspan>
              </text>
              <text class="cls-4" transform="translate(61.78 22.34)">of</text>
              <text
                class="cls-5"
                transform="translate(10.35 48.99) rotate(-90)">
                the
              </text>
            </g>
          </g>
        </g>
      </g></svg>
  </div>
  <!-- <p>by Andy Li</p> -->
  <button class="next-button" on:click|once={addTimeline}>&#8595;</button>
</div>

<script lang="ts">
  import { onMount } from 'svelte';

  type aniTerm = [HTMLElement, any[], any];

  const aniAll = async (aniSequence: aniTerm[]) => {
    // Store all animations so we can cancel
    const completed: Animation[] = [];
    // Loop through sequence
    for (let i = 0; i < aniSequence.length; ++i) {
      completed.push(
        await aniSequence[i][0].animate(aniSequence[i][1], aniSequence[i][2]).finished
      );
    }
    const toCancel = [];
    // Cancel once done?
    for (let i = 0; i < completed.length; ++i) {
      toCancel.push(completed[i].cancel());
    }
    await Promise.all(toCancel);
  };

  // import { tick } from 'svelte';
  onMount(async () => {
    const aniSequence: aniTerm[] = [
      // First 
      [
        document.getElementById('f80d9f19-ba1f-4256-8a6c-3b51d671ef98'),
        [{ transform: 'translateY(0)' }, { transform: 'translateY(20%)' }],
        {
          duration: 1000,
          fill: 'forwards' as FillMode,
        },
      ],
      [
        document.getElementById('fc718a20-faeb-4046-ad10-e1d808fa7f18'),
        [{ }, { transform: 'translateY(20%)' }],
        {
          duration: 1000,
          fill: 'forwards' as FillMode,
        },
      ],
    ];
    await aniAll(aniSequence);
  });
</script>

<style lang="scss">
  @use 'styles/page';
</style>

<div class="main">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.07 131.25"><defs>
      <style lang="scss">
        .b9c011c5-87ca-493b-90eb-69c4faece54e {
          fill: #b9d987;
        }
        .b1064870-7ffe-407c-8872-543062375218 {
          fill: #c5e0a1;
        }
        .be5f6028-3c39-4aa9-9c86-0c92886c54c2 {
          fill: #cad8b6;
        }
        .a8ff295b-091a-444a-a751-535104b29fa0 {
          fill: #f8bbc8;
        }
        .f587abae-5893-4c96-974f-083e98f98d69 {
          fill: #231f20;
        }
        .f76dcdfc-1b04-4cdc-84c1-4f0980a36c7f {
          fill: #f59db4;
        }
        .f5b7c7f6-ee1d-4969-9b84-63e0ea487305 {
          fill: #f6a4bc;
        }
        .b1b0b241-e4a0-41af-8504-e5a9fe06882c {
          fill: #fff;
        }
      </style>
    </defs>
    <g id="a3ecd561-a004-4b84-99de-27ac97f201b1" data-name="Layer 2">
      <g id="a744d278-b385-4f7c-8c31-482b71d0473d" data-name="Hyperinflationo">
        <g id="a6c2f8c7-20fa-4edf-ad41-140440f14636" data-name="piggybank">
          <rect
            id="fc718a20-faeb-4046-ad10-e1d808fa7f18"
            data-name="dollar-far"
            class="b9c011c5-87ca-493b-90eb-69c4faece54e"
            x="30.73"
            y="1.52"
            width="28.15"
            height="57.67"
            transform="translate(4.1 -5.31) rotate(7.11)" />
          <polygon
            id="f80d9f19-ba1f-4256-8a6c-3b51d671ef98"
            data-name="dollar-mid"
            class="b1064870-7ffe-407c-8872-543062375218"
            points="58.63 53.67 30.64 56.67 25.9 12.5 25.74 11.04 53.72 8.03 58.63 53.67" />
          <rect
            id="b86f5ec7-cc79-4411-9ec6-2e82d9991132"
            data-name="dollar-near"
            class="be5f6028-3c39-4aa9-9c86-0c92886c54c2"
            x="29.81"
            y="17.51"
            width="28.15"
            height="45.9"
            transform="translate(13.49 -10.91) rotate(16.71)" />
          <g id="e634b50e-8ab4-4a73-b462-ee36335d74e2" data-name="pig">
            <path
              id="a782ef49-2ad1-482e-b158-6fe70c3351e7"
              data-name="pig-body"
              class="a8ff295b-091a-444a-a751-535104b29fa0"
              d="M6.85,122.3c-.48-.23,2.48-5.14,2.26-10.35s-.81-6.09-3.54-13.46S-1.83,81.39.75,70.23,10,46.39,25.23,40c2.24-1.29,15.23-5.56,25.57-4.92,0,0,20.26,1.13,32.66,12.89S96.84,68.69,96.84,68.69s2.94,17.29-7,31.79c0,0-10.44,6.7-10.44,12.18a28.38,28.38,0,0,0,1.82,9.85S79.92,127,67.67,122a1.39,1.39,0,0,1-.86-1.26l0-4.12s-6.11,1.63-7.86,1.49-.54,7.78,0,11.18c.46,3.13-18.65,2.17-19.77-.63s1.11-5.5.22-9.85c0,0-10.5-.16-17.64-4.08-1.27-.76.61,6.67-1.32,8.06S12.5,125.32,6.85,122.3Z" />
            <path
              id="a65a99b7-5fce-4624-a82a-97e9370c834a"
              data-name="pig-right-eye"
              class="f587abae-5893-4c96-974f-083e98f98d69"
              d="M83.63,64.28c1.49-1.3,4.77,3.8,3.26,4.77S82.4,65.6,83.63,64.28Z" />
            <path
              id="b9a40fe9-8bbd-4b06-9ce7-cf0930c1c29d"
              data-name="pig-left-eye"
              class="f587abae-5893-4c96-974f-083e98f98d69"
              d="M92.72,63.55c1.7-.83,2.36,4.7,1.54,5S91.73,64.16,92.72,63.55Z" />
            <g id="a5b569c0-896b-4eeb-ae76-a0d39ec0d8ea" data-name="pig-nose">
              <g
                id="b3eaeb33-fed3-4360-a39b-d837b74067d8"
                data-name="pig-nose-back">
                <path
                  class="f76dcdfc-1b04-4cdc-84c1-4f0980a36c7f"
                  d="M92.79,68.53s10.73,3,9,15.82-9.2,14.4-14.33,13-6.74-10.48-5.08-19.08S91.07,68.16,92.79,68.53Z" />
                <polyline
                  class="f76dcdfc-1b04-4cdc-84c1-4f0980a36c7f"
                  points="96.64 68.94 94.11 98.19 89.24 97.69 92.42 68.49 96.64 68.94" />
              </g>
              <g
                id="b5b0cd3f-a456-4ca0-bb93-507cf8c464cd"
                data-name="pig-nose-front">
                <path
                  class="f5b7c7f6-ee1d-4969-9b84-63e0ea487305"
                  d="M96.89,69s10.73,3,9,15.82-9.2,14.4-14.33,13S84.81,87.3,86.47,78.71,95.17,68.61,96.89,69Z" />
                <path
                  class="f587abae-5893-4c96-974f-083e98f98d69"
                  d="M104,81.47s.54,3.22,0,3.76C104,85.23,103,83,104,81.47Z" />
                <path
                  class="f587abae-5893-4c96-974f-083e98f98d69"
                  d="M94.83,82.43s-1.57,1.35-.58,4.14C94.25,86.57,95,86,94.83,82.43Z" />
              </g>
            </g>
            <g
              id="b954a4a9-a12c-4fb8-8674-a3993f637a85"
              data-name="pig-right-ear">
              <path
                class="a8ff295b-091a-444a-a751-535104b29fa0"
                d="M82.86,47.4s3.64-5.75,6.51-10.82-3.05-11.15-5-10.59-14.61,9.33-14.61,9.33l1.77,7.83L82.85,47.6" />
              <path
                class="f5b7c7f6-ee1d-4969-9b84-63e0ea487305"
                d="M86.93,27.21s-11.84,12.47-4,20.31c0,0,3.64-5.75,6.51-10.82S87.36,27,86.93,27.21" />
            </g>
            <g
              id="ed2b814b-4d42-4622-a14c-eb36da806b9f"
              data-name="pig-left-ear">
              <path
                class="a8ff295b-091a-444a-a751-535104b29fa0"
                d="M41.56,44.09S58.93,23.17,63.85,24.78c2.59.85,4.58,5.94,5.88,10.54,1.16,4.11,1.77,7.83,1.77,7.83s-9.92-3.31-15.26,4.72C53.5,52.36,41.56,44.09,41.56,44.09Z" />
              <path
                class="f5b7c7f6-ee1d-4969-9b84-63e0ea487305"
                d="M54.57,49.2s4.48-20.89,8.73-20.89,8.26,15,8.26,15S60.14,39.89,54.57,49.2Z" />
            </g>
            <g id="a11ce935-d09b-423c-a376-7098645c52c5" data-name="pig-light">
              <path
                class="b1b0b241-e4a0-41af-8504-e5a9fe06882c"
                d="M33.82,41.66c1.78-.44,3.54-1,5.33-1.37a25.46,25.46,0,0,1,5.22-.54,1.25,1.25,0,0,0,0-2.5,30.19,30.19,0,0,0-5.76.6c-1.83.39-3.63.95-5.45,1.4a1.25,1.25,0,0,0,.66,2.41Z" />
              <path
                class="b1b0b241-e4a0-41af-8504-e5a9fe06882c"
                d="M29.84,42.77a1.25,1.25,0,0,0,0-2.5,1.25,1.25,0,0,0,0,2.5Z" />
            </g>
          </g>
        </g>
      </g>
    </g></svg>
</div>

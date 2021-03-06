<script lang="ts">
  import { noPresident, viewedLeft } from './stores';
  import President from './President.svelte';
  import { tick, onMount } from 'svelte';

  type aniTerm = [HTMLElement, any[], any];

  const aniAll = async (aniSequence: aniTerm[]): Promise<Animation[]> => {
    // Store all animations so we can cancel
    const completed: Animation[] = [];
    // Loop through sequence
    for (let i = 0; i < aniSequence.length; ++i) {
      completed.push(
        await aniSequence[i][0].animate(aniSequence[i][1], aniSequence[i][2])
          .finished
      );
    }
    return completed;
  };

  const aniParallel = async (aniSequence: aniTerm[]): Promise<Animation[]> => {
    // Store all animations
    const todo: Promise<Animation>[] = [];
    // Loop through sequence
    for (let i = 0; i < aniSequence.length; ++i) {
      todo.push(
        aniSequence[i][0].animate(aniSequence[i][1], aniSequence[i][2]).finished
      );
    }
    return Promise.all(todo);
  };

  // import { tick } from 'svelte';
  onMount(async () => {
    // First people jump up and down
    const aniPeople: aniTerm[] = [
      // People go UP TWICE
      [
        document.getElementById('fb49e104-237a-4289-bfd4-f0c46c08582f'),
        [
          {},
          { transform: 'translateY(-3%)' },
          { transform: 'translateY(0)' },
          { transform: 'translateY(0)' },
          { transform: 'translateY(-3%)' },
          {},
        ],
        {
          delay: 1000,
          duration: 400,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
      // The Bill goes inside of the Reischstag
      [
        document.getElementById('aca2f394-6c94-4448-9049-e434baf0f8b7'),
        [{}, { transform: 'translateX(30%)' }],
        {
          delay: 200,
          duration: 3000,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
    ];
    const aniMembers: aniTerm[] = [
      // The members start spinning
      // Member right
      [
        document.getElementById('fda5e09f-da5e-463e-b058-be044d3302a7'),
        [{}, { transform: 'rotate(360deg)' }, { transform: 'rotate(12deg)' }],
        {
          iterations: 2,
          duration: 2500,
          fill: 'forwards' as FillMode,
        },
      ],
      // Member mid
      [
        document.getElementById('aaf539bf-90e5-4db2-960a-5d51a9d43045'),
        [{}, { transform: 'rotate(360deg)' }],
        {
          iterations: 10,
          duration: 500,
          fill: 'forwards' as FillMode,
        },
      ],
      // Member left
      [
        document.getElementById('bcf5a1bd-8736-4547-8d55-8be87ebc5478'),
        [{}, { transform: 'rotate(360deg)' }],
        {
          iterations: 4,
          duration: 1250,
          fill: 'forwards' as FillMode,
        },
      ],
    ];
    const aniPath: aniTerm[] = [
      [
        document.getElementById('bf89388b-46e8-405a-a6be-1ba10992973e'),
        [{}, { opacity: '1' }],
        {
          duration: 1000,
          fill: 'forwards' as FillMode,
        },
      ],
    ];

    // Then move the bill into the reischstag

    // The people-members start spinning (1s?)

    // Alert user here, wait for res

    // Then phase in blocked-path

    const done: Animation[][] = [];
    // The people's will goes through!
    done.push(await aniAll(aniPeople));
    done.push(await aniParallel(aniMembers));
    // The members...they're kinda afk ngl
    await asyncAlert(
      'Due to sweeping conflicts of interest, the Reischstag has stopped responding! Good Luck!'
    );
    // Then we alert that the people have stopped responding
    done.push(await aniParallel(aniPath));
  });

  const asyncAlert = (str: string) =>
    new Promise((resolve) => resolve(confirm(str)));

  const addPresident = async () => {
    // If we haven't already added the timeline
    if ($noPresident) {
      // Add the timeline to viewed
      $viewedLeft = [...$viewedLeft, President];
      // Scrolldown if possible
      await tick();
      // Then update the behavior to not add timeline anymore
      $noPresident = !$noPresident;
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

  .people-wrapper {
    width: 75%;
  }
</style>

<div class="main">
  <div class="people-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446.63 122.34"><defs>
        <style lang="scss">
          .af0a22d7-1207-4b53-bb3f-e07177ac5559,
          .f7a1d989-8a46-4940-a99d-d9080ff79d17 {
            fill: none;
            stroke-miterlimit: 10;
          }
          .af0a22d7-1207-4b53-bb3f-e07177ac5559 {
            stroke: #f37476;
            stroke-width: 8px;
          }
          .e5e0bcd6-afaa-4448-8e70-21b08e6ee718 {
            font-size: 6.51px;
          }
          .a731660c-86a5-47bf-9a78-e5f0dd6c4036,
          .bfadb4f6-e134-47ed-bfc1-104b3f71c8ea,
          .e5e0bcd6-afaa-4448-8e70-21b08e6ee718 {
            fill: #fff;
          }
          .a731660c-86a5-47bf-9a78-e5f0dd6c4036,
          .ae6829a5-d47c-4bad-8081-c7892eb75448,
          .e5e0bcd6-afaa-4448-8e70-21b08e6ee718 {
            font-family: LEMONMILK-Regular, LEMON MILK;
          }
          .b65f4e0d-1d7c-4267-a4e5-3866bdf63374 {
            letter-spacing: -0.02em;
          }
          .b49c7fa4-0041-4959-8389-aedb21c1f6f4 {
            letter-spacing: 0em;
          }
          .a83b4f92-262b-4cef-8d42-c0c32959a005 {
            letter-spacing: -0.02em;
          }
          .a731660c-86a5-47bf-9a78-e5f0dd6c4036,
          .ae6829a5-d47c-4bad-8081-c7892eb75448 {
            font-size: 12px;
          }
          .ae6829a5-d47c-4bad-8081-c7892eb75448 {
            fill: #abe0f4;
          }
          .ed571d6f-136d-45c2-a5e4-e16998548a4a {
            letter-spacing: -0.1em;
          }
          .a538dcbc-4d3d-4d58-ad33-b1aeb2b4d28d {
            letter-spacing: -0.15em;
          }
          .aab35fab-5b05-430c-ad67-d46e5d36ceb0 {
            letter-spacing: -0.02em;
          }
          .a237df98-45b7-48ea-a54f-ba6180089ec2 {
            letter-spacing: -0.07em;
          }
          .af90b06c-73ed-49f9-929a-742d363709c2 {
            fill: #f7f3a2;
          }
          .f7a1d989-8a46-4940-a99d-d9080ff79d17 {
            stroke: #f37576;
            stroke-width: 3px;
          }
          .ae127eb7-374e-4cae-85d8-288a81321e5a {
            fill: #979899;
          }
          .bed7be41-18dd-442d-84c0-b7fa978215f7 {
            fill: #727373;
          }
          .ec80e671-e3ae-44cd-a958-9bd816d0200a {
            fill: #685447;
          }
          // Blocked-path
          #bf89388b-46e8-405a-a6be-1ba10992973e {
            opacity: 0;
          }
          // Right member
          #fda5e09f-da5e-463e-b058-be044d3302a7 {
            transform-origin: center;
            transform-box: fill-box;
          }
          // Left member
          #bcf5a1bd-8736-4547-8d55-8be87ebc5478 {
            transform-origin: center;
            transform-box: fill-box;
          }
          // Mid member
          #aaf539bf-90e5-4db2-960a-5d51a9d43045 {
            transform-origin: center;
            transform-box: fill-box;
          }
        </style>
      </defs>
      <g id="aa699a95-c4fb-46b0-aff9-89e2e0e11332" data-name="Layer 2">
        <g
          id="a6c5fec1-f767-4123-bd2b-6b68452b6567"
          data-name="Hyperinflationo">
          <g id="b8494a1b-a016-47fd-a2a9-20b3fe928a1a" data-name="the-people">
            <line
              id="bf89388b-46e8-405a-a6be-1ba10992973e"
              data-name="blocked-path"
              class="af0a22d7-1207-4b53-bb3f-e07177ac5559"
              x1="211.35"
              y1="78.45"
              x2="95.82"
              y2="78.45" />
            <g
              id="eb975eca-4b2b-49f2-891a-fb314f5a94cd"
              data-name="democratic-label">
              <text
                class="e5e0bcd6-afaa-4448-8e70-21b08e6ee718"
                transform="translate(365.47 87.01)">
                Suppo
                <tspan
                  class="b65f4e0d-1d7c-4267-a4e5-3866bdf63374"
                  x="22.85"
                  y="0">
                  r
                </tspan>
                <tspan
                  class="b49c7fa4-0041-4959-8389-aedb21c1f6f4"
                  x="27.06"
                  y="0">
                  t
                </tspan>
                <tspan
                  class="a83b4f92-262b-4cef-8d42-c0c32959a005"
                  x="32.82"
                  y="0">
                  f
                </tspan>
                <tspan x="36.4" y="0">or</tspan>
              </text>
              <text
                class="ae6829a5-d47c-4bad-8081-c7892eb75448"
                transform="translate(364.56 100.04)">
                democr
                <tspan
                  class="ed571d6f-136d-45c2-a5e4-e16998548a4a"
                  x="54.72"
                  y="0">
                  a
                </tspan>
                <tspan x="62.79" y="0">tic</tspan>
              </text>
              <text
                class="a731660c-86a5-47bf-9a78-e5f0dd6c4036"
                transform="translate(364.56 114.67)">
                <tspan class="a538dcbc-4d3d-4d58-ad33-b1aeb2b4d28d">P</tspan>
                <tspan x="5.9" y="0">a</tspan>
                <tspan
                  class="aab35fab-5b05-430c-ad67-d46e5d36ceb0"
                  x="15.15"
                  y="0">
                  r
                </tspan>
                <tspan x="22.92" y="0">ties</tspan>
              </text>
            </g>
            <text
              class="a731660c-86a5-47bf-9a78-e5f0dd6c4036"
              transform="translate(172.69 119.13)">
              Reischs
              <tspan
                class="ed571d6f-136d-45c2-a5e4-e16998548a4a"
                x="50.95"
                y="0">
                t
              </tspan>
              <tspan
                class="a237df98-45b7-48ea-a54f-ba6180089ec2"
                x="56.88"
                y="0">
                a
              </tspan>
              <tspan x="65.24" y="0">g</tspan>
            </text>
            <text
              class="a731660c-86a5-47bf-9a78-e5f0dd6c4036"
              transform="translate(0 43.05)">
              The people
            </text>
            <rect
              id="aca2f394-6c94-4448-9049-e434baf0f8b7"
              data-name="people-bill"
              class="af90b06c-73ed-49f9-929a-742d363709c2"
              x="67.11"
              y="56.73"
              width="28.7"
              height="39.43" />
            <g id="fb49e104-237a-4289-bfd4-f0c46c08582f" data-name="people">
              <g
                id="ea20a6a6-1e33-48b3-ac20-8b93fc1a3ed8"
                data-name="person-right">
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M53.28,93.56l.19.08-.6-.26a9.2,9.2,0,0,1,2,1.1l-.51-.39a44.29,44.29,0,0,1,3.44,3.67,2.49,2.49,0,0,0,3.54,0A2.52,2.52,0,0,0,62.09,96a2.59,2.59,0,0,0-.73-1.77c-.9-.88-1.62-1.91-2.49-2.81a11.47,11.47,0,0,0-1.82-1.52,14.4,14.4,0,0,0-2.44-1.17,2.51,2.51,0,0,0-2.82,3.68l.39.5a2.52,2.52,0,0,0,1.1.65Z" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M51.4,90.22l0,.09.25-.6a6,6,0,0,1-.77,1.23c-.3.4-.59.81-.86,1.23a10.18,10.18,0,0,0-1.43,3.17,2.64,2.64,0,0,0,.25,1.93,2.51,2.51,0,0,0,3.42.9,2.5,2.5,0,0,0,1.15-1.5,7.87,7.87,0,0,1,.35-1.07l-.25.59a12.73,12.73,0,0,1,1.22-2.08c.23-.33.47-.65.7-1a7.5,7.5,0,0,0,.83-1.59,2.51,2.51,0,0,0-3.68-2.82l-.5.39a2.52,2.52,0,0,0-.65,1.1Z" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M46.93,83.43a54.27,54.27,0,0,0,10.57-.66A2.74,2.74,0,0,0,59.27,82,2.52,2.52,0,0,0,60,80.27c-.06-1.21-1.11-2.69-2.5-2.5a54.27,54.27,0,0,1-10.57.66,2.51,2.51,0,0,0-2.5,2.5,2.55,2.55,0,0,0,2.5,2.5Z" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M49.9,75.6a7.59,7.59,0,0,1,.5,3.18c0,1.39.09,2.78.17,4.16q.24,4.22.8,8.38a2.57,2.57,0,0,0,2.5,2.5c1.21,0,2.68-1.11,2.5-2.5-.38-2.89-.66-5.79-.82-8.7-.15-2.7.19-5.79-.83-8.35a2.59,2.59,0,0,0-3.08-1.75A2.52,2.52,0,0,0,49.9,75.6Z" />
                <circle
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  cx="52.43"
                  cy="68.76"
                  r="7.03" />
              </g>
              <g
                id="ae6558ce-a628-4c54-afa4-40001c2e8169"
                data-name="person-mid">
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M37.16,86.88l.19.08-.6-.26a8.91,8.91,0,0,1,2,1.1l-.5-.39a44.29,44.29,0,0,1,3.44,3.67A2.51,2.51,0,0,0,46,89.32a2.58,2.58,0,0,0-.74-1.77c-.89-.88-1.62-1.91-2.48-2.81a11.11,11.11,0,0,0-1.83-1.52,14.68,14.68,0,0,0-2.43-1.17,2.52,2.52,0,0,0-3.08,1.75,2.6,2.6,0,0,0,.25,1.93l.4.5a2.52,2.52,0,0,0,1.1.65Z" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M35.28,83.54l0,.08L35.5,83a7.06,7.06,0,0,1-.77,1.23q-.45.6-.87,1.23a10.39,10.39,0,0,0-1.42,3.17,2.64,2.64,0,0,0,.25,1.93,2.5,2.5,0,0,0,4.57-.6,6.81,6.81,0,0,1,.35-1.08l-.25.6a12.05,12.05,0,0,1,1.22-2.08c.23-.33.47-.65.7-1a7,7,0,0,0,.82-1.59A2.49,2.49,0,0,0,39.85,83a2.5,2.5,0,0,0-3.42-.9l-.5.39a2.52,2.52,0,0,0-.65,1.1Z" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M30.81,76.75a54.13,54.13,0,0,0,10.56-.67,2.76,2.76,0,0,0,1.77-.73,2.49,2.49,0,0,0,.73-1.77c0-1.21-1.11-2.68-2.5-2.5a54.13,54.13,0,0,1-10.56.67,2.51,2.51,0,0,0-2.5,2.5,2.56,2.56,0,0,0,2.5,2.5Z" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M33.77,68.92a7.57,7.57,0,0,1,.51,3.18c0,1.39.08,2.78.17,4.16.16,2.8.43,5.6.8,8.38a2.57,2.57,0,0,0,2.5,2.5c1.21-.06,2.68-1.11,2.5-2.5-.38-2.89-.66-5.79-.82-8.7-.15-2.7.18-5.79-.83-8.35a2.59,2.59,0,0,0-3.08-1.75,2.53,2.53,0,0,0-1.75,3.08Z" />
                <circle
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  cx="36.31"
                  cy="62.08"
                  r="7.03" />
              </g>
              <g
                id="a46d3843-77b6-4b98-935f-a6bbb3f3d189"
                data-name="person-left">
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M22.71,95l.19.08-.6-.26a9.13,9.13,0,0,1,2,1.1l-.51-.39a41.14,41.14,0,0,1,3.44,3.67,2.49,2.49,0,0,0,3.54,0,2.48,2.48,0,0,0,.73-1.76,2.59,2.59,0,0,0-.73-1.77c-.89-.88-1.62-1.91-2.48-2.81a11.11,11.11,0,0,0-1.83-1.52A14.4,14.4,0,0,0,24,90.18a2.51,2.51,0,0,0-2.82,3.68l.39.5a2.5,2.5,0,0,0,1.11.65Z" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M20.83,91.67l0,.09.25-.6a6.56,6.56,0,0,1-.78,1.23c-.29.4-.58.81-.86,1.23A9.93,9.93,0,0,0,18,96.79a2.64,2.64,0,0,0,.25,1.93,2.56,2.56,0,0,0,1.49,1.15,2.5,2.5,0,0,0,3.08-1.75,5.58,5.58,0,0,1,.35-1.07l-.25.59a11.44,11.44,0,0,1,1.22-2.08l.69-1A7.07,7.07,0,0,0,25.65,93a2.49,2.49,0,0,0-.25-1.92,2.54,2.54,0,0,0-1.5-1.15,2.48,2.48,0,0,0-1.92.25l-.51.39a2.5,2.5,0,0,0-.64,1.1Z" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M16.35,84.88a54.23,54.23,0,0,0,10.57-.67,2.66,2.66,0,0,0,1.77-.73,2.53,2.53,0,0,0,.73-1.77c-.05-1.21-1.11-2.68-2.5-2.5a54.23,54.23,0,0,1-10.57.67,2.52,2.52,0,0,0-2.5,2.5,2.56,2.56,0,0,0,2.5,2.5Z" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M19.32,77.05a7.76,7.76,0,0,1,.51,3.18c0,1.39.08,2.78.16,4.16.17,2.8.44,5.6.8,8.38a2.57,2.57,0,0,0,2.5,2.5c1.21,0,2.69-1.11,2.5-2.5-.38-2.89-.66-5.79-.82-8.7-.15-2.7.19-5.79-.83-8.35A2.58,2.58,0,0,0,21.07,74a2.52,2.52,0,0,0-1.75,3.08Z" />
                <circle
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  cx="21.85"
                  cy="70.21"
                  r="7.03" />
              </g>
            </g>
            <g
              id="b8e18c10-49d4-41ee-a316-1fe5fa5cb040"
              data-name="democratic-graph">
              <polyline
                id="a3bb90d6-845b-4a2e-a8f9-2110c3312dea"
                data-name="democratic-arrow"
                class="f7a1d989-8a46-4940-a99d-d9080ff79d17"
                points="402.21 21.84 402.21 64.25 411.4 55.06" />
              <rect
                id="efeef1a1-0ac3-4be8-8710-81000139aafb"
                data-name="democratic-bar"
                class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                x="381.37"
                y="21.84"
                width="14.09"
                height="46.43" />
            </g>
            <g
              id="f77e1db3-4293-4302-afff-8b25d67d5ae7"
              data-name="people-members">
              <g
                id="fda5e09f-da5e-463e-b058-be044d3302a7"
                data-name="member-right">
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M223.12,38.8a9.77,9.77,0,0,1,1.79,1.67l-.39-.51a41.78,41.78,0,0,1,2.39,4.48,2.62,2.62,0,0,0,1.5,1.15,2.58,2.58,0,0,0,1.92-.25,2.54,2.54,0,0,0,.9-3.42c-.63-1.08-1.07-2.26-1.67-3.36a10.4,10.4,0,0,0-1.37-1.93,10.55,10.55,0,0,0-1.54-1.37,2.71,2.71,0,0,0-1.77-.73,2.51,2.51,0,0,0-2.5,2.5,2.44,2.44,0,0,0,.74,1.77Z" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M222.67,35.48l0,.06L223,35a6.85,6.85,0,0,1-1.12,1c-.38.31-.76.62-1.12.94a10.06,10.06,0,0,0-2.18,2.68,2.62,2.62,0,0,0-.25,1.92,2.58,2.58,0,0,0,1.15,1.5,2.51,2.51,0,0,0,3.42-.9,6,6,0,0,1,.6-.92l-.4.51a11.74,11.74,0,0,1,1.7-1.68c.3-.26.61-.51.92-.76A7,7,0,0,0,227,38a1.86,1.86,0,0,0,.3-.93,2,2,0,0,0,0-1,2.5,2.5,0,0,0-3.08-1.74l-.6.25a2.53,2.53,0,0,0-.89.89Z" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M225,21a8.9,8.9,0,0,1-.41,3.48c-.33,1.38-.64,2.76-.93,4.15-.58,2.85-1,5.72-1.41,8.6a2.5,2.5,0,0,0,2.5,2.5,2.59,2.59,0,0,0,2.5-2.5c.33-2.49.82-5.3,1.36-7.89s1.7-5.58,1.39-8.34a2.56,2.56,0,0,0-2.5-2.5c-1.23.05-2.66,1.11-2.5,2.5Z" />
                <circle
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  cx="229.24"
                  cy="15.02"
                  r="7.03" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M218.8,21.77a12.65,12.65,0,0,0,6,9.65,5,5,0,0,0,3.88.66,9.1,9.1,0,0,0,2.68-1.2,10.57,10.57,0,0,0,3.83-4.29,2.5,2.5,0,1,0-4.32-2.52,9.06,9.06,0,0,1-.49.92c-.08.11-.19.38-.3.43.19-.09.27-.33,0,0a7.12,7.12,0,0,1-.66.69c-.09.09-.27.31-.39.35l.16-.13-.22.15a8.24,8.24,0,0,1-.9.54c-.07,0-.54.24-.18.09s-.2.07-.28.09a1.21,1.21,0,0,1-.45.12.92.92,0,0,1,.59,0l-.18,0c-.56-.31.45.28-.1-.06l-.46-.28c-.12-.08-.37-.18-.44-.3.12.2.31.25,0,0a8.94,8.94,0,0,1-.71-.66c-.21-.21-.46-.64-.71-.79.2.25.24.3.13.15l-.15-.21c-.1-.15-.2-.3-.29-.45s-.33-.56-.47-.85a3.62,3.62,0,0,1-.19-.4c.17.61,0,.09,0-.07a9,9,0,0,1-.3-1c0-.18-.07-.35-.11-.52-.11-.51.06.52,0,0a2.57,2.57,0,0,0-2.5-2.5,2.53,2.53,0,0,0-2.5,2.5Z" />
              </g>
              <g
                id="aaf539bf-90e5-4db2-960a-5d51a9d43045"
                data-name="member-mid">
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M208.64,31.55c.44.27.88.54,1.29.85l-.5-.39a7.39,7.39,0,0,1,1.24,1.26l-.39-.51c.86,1.12,1.47,2.4,2.32,3.53a2.69,2.69,0,0,0,1.49,1.14,2.5,2.5,0,0,0,3.08-1.74,2.46,2.46,0,0,0-.25-1.93c-.76-1-1.33-2.13-2-3.15a11,11,0,0,0-1.52-1.81,14.8,14.8,0,0,0-2.19-1.57,2.51,2.51,0,0,0-3.42.9,2.55,2.55,0,0,0,.9,3.42Z" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M207.65,27.85c-.08.14-.17.26-.26.39l.39-.51c-.58.73-1.31,1.35-1.92,2.05a17,17,0,0,0-1.16,1.52,9.25,9.25,0,0,0-.87,1.79,2.47,2.47,0,0,0,.25,1.93,2.54,2.54,0,0,0,1.49,1.14,2.5,2.5,0,0,0,1.93-.25l.5-.39a2.52,2.52,0,0,0,.65-1.1c0-.05,0-.1,0-.14l-.25.59a7.06,7.06,0,0,1,1-1.58l-.39.51a16.81,16.81,0,0,1,1.32-1.48A10.81,10.81,0,0,0,212,30.38a2.64,2.64,0,0,0,.25-1.93,2.52,2.52,0,0,0-3.08-1.75,2.63,2.63,0,0,0-1.49,1.15Z" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M208.28,13.78a6.11,6.11,0,0,1,.09,1.56c0,.65-.12,1.3-.2,1.95-.17,1.33-.31,2.68-.43,4-.25,2.74-.39,5.49-.44,8.24a2.53,2.53,0,0,0,2.5,2.5,2.55,2.55,0,0,0,2.5-2.5c0-2.86.2-5.72.47-8.56s1-5.74.33-8.54a2.5,2.5,0,1,0-4.82,1.33Z" />
                <circle
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  cx="211.73"
                  cy="7.03"
                  r="7.03" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M202.19,15.3a12.43,12.43,0,0,0,6.73,8.39,5.07,5.07,0,0,0,4,.41,10.5,10.5,0,0,0,2.88-1.71,10.61,10.61,0,0,0,3.27-4.89,2.51,2.51,0,0,0-1.75-3.07,2.55,2.55,0,0,0-3.07,1.75,2.56,2.56,0,0,0-.19.5c.13-.29.15-.35.07-.18a2.56,2.56,0,0,1-.11.24,7.23,7.23,0,0,1-.51.84c-.28.41-.1,0,0,0a4.71,4.71,0,0,0-.35.41,6.6,6.6,0,0,1-.71.69c-.27.23-.13.21,0,0-.08.12-.32.22-.44.3s-.31.19-.47.27l-.16.09q-.36.16.09,0c-.1.1-.55,0-.22.09s.51.1.16,0c-.57-.23.27.17-.16-.05l-.48-.24a8.05,8.05,0,0,1-.83-.51,1.72,1.72,0,0,1-.35-.25c.42.45.06,0,0-.06a8.82,8.82,0,0,1-.7-.67l-.35-.39c-.26-.3-.05-.2,0,0-.07-.28-.44-.63-.59-.88a7.37,7.37,0,0,1-.43-.78,3.09,3.09,0,0,1-.14-.32l.11.27a2.43,2.43,0,0,0-.18-.49,7.47,7.47,0,0,1-.28-1,2.52,2.52,0,0,0-3.08-1.74,2.56,2.56,0,0,0-1.75,3.07Z" />
              </g>
              <g
                id="bcf5a1bd-8736-4547-8d55-8be87ebc5478"
                data-name="member-left">
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M195.46,36l.19.08-.6-.25a8.91,8.91,0,0,1,2,1.1l-.5-.39A44.29,44.29,0,0,1,200,40.22a2.57,2.57,0,0,0,1.76.73,2.53,2.53,0,0,0,1.77-.73,2.49,2.49,0,0,0,.73-1.77,2.57,2.57,0,0,0-.73-1.76c-.89-.88-1.62-1.91-2.48-2.81a11.11,11.11,0,0,0-1.83-1.52,14.68,14.68,0,0,0-2.43-1.17,2.52,2.52,0,0,0-3.08,1.75,2.6,2.6,0,0,0,.25,1.93l.39.5a2.44,2.44,0,0,0,1.11.64Z" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M193.58,32.68l0,.08.25-.59A7.9,7.9,0,0,1,193,33.4q-.45.6-.87,1.23a10.05,10.05,0,0,0-1.42,3.17,2.65,2.65,0,0,0,.25,1.93,2.48,2.48,0,0,0,3.42.89,2.53,2.53,0,0,0,1.15-1.49,5.92,5.92,0,0,1,.35-1.08l-.25.6a11.44,11.44,0,0,1,1.22-2.08c.23-.33.46-.65.7-1A7,7,0,0,0,198.4,34a2.51,2.51,0,0,0-.25-1.93,2.54,2.54,0,0,0-1.49-1.14,2.5,2.5,0,0,0-1.93.25l-.51.39a2.5,2.5,0,0,0-.64,1.1Z" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M192.07,18.06a7.57,7.57,0,0,1,.51,3.18c0,1.39.08,2.78.16,4.16.17,2.8.44,5.6.81,8.38a2.57,2.57,0,0,0,2.5,2.5c1.2-.06,2.68-1.11,2.5-2.5-.38-2.89-.66-5.79-.82-8.7-.15-2.71.18-5.79-.84-8.35A2.57,2.57,0,0,0,193.82,15a2.53,2.53,0,0,0-1.75,3.08Z" />
                <circle
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  cx="194.61"
                  cy="11.22"
                  r="7.03" />
                <path
                  class="bfadb4f6-e134-47ed-bfc1-104b3f71c8ea"
                  d="M186.28,20.47a12.73,12.73,0,0,0,8,7.66,5.24,5.24,0,0,0,4-.2,8.61,8.61,0,0,0,2.29-1.78,10.5,10.5,0,0,0,2.74-5.3,2.56,2.56,0,0,0-1.75-3.07,2.52,2.52,0,0,0-3.07,1.74,8.42,8.42,0,0,1-.24,1c-.05.15-.1.3-.16.45-.2.59.25-.44,0,.1-.17.31-.33.62-.52.91a3.83,3.83,0,0,1-.27.39c.42-.44,0,0-.1.08-.21.24-.44.45-.67.67-.45.42.42-.27-.09.08-.13.09-.26.18-.4.26s-.28.1,0,0,.33,0,.14,0-.14,0,.13,0c-.35-.09-.68-.18-1-.3a3,3,0,0,1-.42-.16c.57.32.05,0-.06,0-.27-.14-.53-.28-.79-.44l-.45-.3c-.06,0-.47-.36-.18-.13l-.17-.14-.4-.37c-.21-.21-.42-.43-.62-.65l-.23-.28.17.22a3.94,3.94,0,0,0-.31-.44,8.69,8.69,0,0,1-.46-.77c-.09-.16-.17-.32-.25-.48-.23-.46.18.45,0-.07a2.5,2.5,0,1,0-4.82,1.33Z" />
              </g>
            </g>
            <g
              id="a4a2b79e-9899-42a2-a3cf-d473eb3d9211"
              data-name="people-reischstag">
              <polygon
                class="ae127eb7-374e-4cae-85d8-288a81321e5a"
                points="181.86 22.52 194.94 22.52 194.94 31.82 201.94 31.82 201.94 22.52 215.94 22.52 215.94 31.82 222.44 31.82 222.44 22.52 236.09 22.52 236.09 37.14 232.1 43.09 232.1 100.39 185.78 100.39 185.78 43.09 181.86 36.3 181.86 22.52" />
              <polygon
                class="bed7be41-18dd-442d-84c0-b7fa978215f7"
                points="222.44 22.52 222.44 31.82 215.94 31.82 215.94 22.52 216.23 100.39 232.1 100.39 232.1 43.09 236.09 37.14 236.09 22.52 222.44 22.52" />
              <polygon
                class="ec80e671-e3ae-44cd-a958-9bd816d0200a"
                points="209.73 64.48 196.24 78.2 196.48 100.39 222.98 100.39 222.71 78.2 209.73 64.48" />
            </g>
          </g>
        </g>
      </g></svg>
  </div>

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
        on:click={addPresident}>
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

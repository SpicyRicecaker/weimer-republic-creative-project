<script lang="ts">
  import { onMount } from 'svelte';
  import App from './App.svelte';
  import Chart from './Chart.svelte';
  import FourtyEight from './FourtyEight.svelte';

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
    const aniPiggy: aniTerm[] = [
      // dollar-mid drops
      [
        document.getElementById('a789c028-01e0-49c7-94b0-54cee7d952f8'),
        [{}, { transform: 'translateY(20%)' }],
        {
          duration: 1000,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
      // dollar-far drops
      [
        document.getElementById('acba3a9f-40d1-4c95-b406-3d673201214d'),
        [{}, { transform: 'translateY(20%)' }],
        {
          duration: 600,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
      // dollar near drops
      [
        document.getElementById('beeb1395-71ae-4f2d-a476-13b29f6df40f'),
        [{}, { transform: 'translateY(20%)' }],
        {
          duration: 1000,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
      // entire pig gets squeezed slightly down
      [
        document.getElementById('b9c92815-d1c6-4be1-95eb-009565526158'),
        [
          { transform: 'rotateX(0)' },
          { transform: 'rotateX(10deg)' },
          { transform: 'rotateX(0)' },
        ],
        {
          duration: 700,
          fill: 'forwards' as FillMode,
          easing: 'ease-out',
        },
      ],
    ];
    const aniEars: aniTerm[] = [
      // Nose bump
      [
        document.getElementById('fdc29d92-c6fb-41ca-be8a-b7efc358a520'),
        [
          { transform: 'translateX(0)' },
          { transform: 'translateX(2%)' },
          { transform: 'translateX(0)' },
        ],
        {
          duration: 700,
          fill: 'forwards' as FillMode,
          easing: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
        },
      ],
      // Right Ear DOWN
      [
        document.getElementById('b3094268-c03a-4414-9cac-98f3b3789a1b'),
        [{}, { transform: 'rotateX(-20deg)' }, {}],
        {
          duration: 1000,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
      // Left Ear UP
      [
        document.getElementById('bf5986bf-eba9-4b31-969c-ae325f537f10'),
        [{}, { transform: 'rotateX(10deg)' }, {}],
        {
          duration: 1000,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
    ];
    const aniFire: aniTerm[] = [
      [
        document.getElementById('a54ce1b2-ad44-4250-9bca-8b6e66a38051'),
        [
          { transform: 'translateY(-20%)' },
          { opacity: '1', transform: 'translateY(0)' },
        ],
        {
          duration: 2000,
          fill: 'forwards' as FillMode,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        },
      ],
      [
        document.getElementById('a54ce1b2-ad44-4250-9bca-8b6e66a38051'),
        [
          {},
          { transform: 'rotateX(-20deg)' },
          { transform: 'rotateX(0)' },
          { transform: 'rotateX(-20deg)' },
          { transform: 'rotateX(0)' },
          { transform: 'rotateX(-20deg)' },
          { transform: 'rotateX(0)' },
        ],
        {
          duration: 2000,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
      [
        document.getElementById('a54ce1b2-ad44-4250-9bca-8b6e66a38051'),
        [{ transform: 'translateY(-20%)', opacity: '0' }],
        {
          duration: 1000,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
    ];
    const aniCooked: aniTerm[] = [
      // Piggy bye bye
      [
        document.getElementById('b9c92815-d1c6-4be1-95eb-009565526158'),
        [{}, { opacity: '0' }],
        {
          delay: 700,
          duration: 2000,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
      // Hello bacon
      [
        document.getElementById('f786f173-0116-4f88-a329-9f99a13e6ebc'),
        [
          { transform: 'translateY(-20%)' },
          { transform: 'translateY(-20%)', opacity: '1' },
        ],
        {
          duration: 2000,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
    ];
    const aniMoney: aniTerm[] = [
      // Dollar mid
      [
        document.getElementById('a789c028-01e0-49c7-94b0-54cee7d952f8'),
        [{}, { opacity: '0' }],
        {
          duration: 1000,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
      // Dollar far
      [
        document.getElementById('acba3a9f-40d1-4c95-b406-3d673201214d'),
        [{}, { opacity: '0' }],
        {
          duration: 1000,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
      // Dollar near
      [
        document.getElementById('beeb1395-71ae-4f2d-a476-13b29f6df40f'),
        [{}, { opacity: '0' }],
        {
          duration: 1000,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
      // Plus coin
      [
        document.getElementById('e56dcf03-83ea-4559-b88f-d3a51f4c8f93'),
        [
          { transform: 'translateY(0)' },
          { transform: 'translateY(0)', opacity: '1' },
        ],
        {
          delay: 2700,
          duration: 2000,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
    ];

    const aniBacon: aniTerm[] = [
      // Bacon top
      [
        document.getElementById('a1688cb5-7780-4f15-87b3-da5a00e1fa66'),
        [{}, { transform: 'translateY(-3%)' }, {}],
        {
          delay: 1400,
          duration: 200,
          // fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
      // Bacon bot
      [
        document.getElementById('be4484ab-3550-42d5-afc6-b69ec9b355b6'),
        [{}, { transform: 'translateY(-3%)' }, {}],
        {
          delay: 2800,
          duration: 200,
          // fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
      // Dollar near
      [
        document.getElementById('e56dcf03-83ea-4559-b88f-d3a51f4c8f93'),
        [{}, { transform: 'rotate(180deg)' } ],
        {
          delay: 5000,
          duration: 1000,
          // fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
    ];

    let done: Animation[][] = [];
    // Money in, piggy shake!
    done.push(await aniAll(aniPiggy));
    // Ear move uwu
    done.push(await aniParallel(aniEars));
    // Fire burns while the pig fades and bacon appears
    // also some really good looking code right here xd ikr sushi pancaker 123
    done.push(
      ...(await Promise.all([
        aniAll(aniFire),
        aniParallel(aniMoney),
        aniAll(aniCooked),
      ]))
    );
    do {
      done.push(await aniParallel(aniBacon));
    } while (true);
  });
</script>

<style lang="scss">
  @use 'styles/page';
</style>

<div class="main">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.07 134.12"><defs>
      <style lang="scss">
        .b9ce9df4-63f1-46ff-98f2-4be89320446a {
          opacity: 0;
        }
        .b0b4b9c9-db7b-42bd-a02e-dfcc007de99e {
          fill: #dc5b5c;
        }
        .a4542691-1be7-4328-8d67-31e78690af0e {
          fill: #ffefdc;
        }
        .b0c15cb7-00d7-4c18-9318-869140884049 {
          fill: #fffeff;
        }
        .bcf93f46-ca58-49c2-9c8d-031f7c23ea05 {
          fill: #b9d987;
        }
        .a3579065-517d-4c20-80e2-58d89ddc267a {
          fill: #c5e0a1;
        }
        .b1d3eefc-d95c-4dd1-b58f-17b5c66563ec {
          fill: #cad8b6;
        }
        .a6675662-dbab-407f-8f50-f07ccc82a97e {
          fill: #f8bbc8;
        }
        .a5b65c57-1f0e-4f77-bfcc-e6bc8ba36c79 {
          fill: #231f20;
        }
        .af46535f-d366-431f-8f44-114a758652dc {
          fill: #f59db4;
        }
        .aa035127-b50a-4530-a148-59d508e088a7 {
          fill: #f6a4bc;
        }
        .ad4c723e-c7a2-404a-992e-bf3ecd161101 {
          fill: #fff;
        }
        .b37b7876-7b12-40a6-ab58-753e079b1bef {
          fill: #efb085;
        }
        .bc79d2ef-b626-4c81-9eec-ec986ad469fc {
          fill: #f4e39c;
        }
        #b9c92815-d1c6-4be1-95eb-009565526158 {
          transform-origin: center;
          transform-box: fill-box;
        }
        #b3094268-c03a-4414-9cac-98f3b3789a1b {
          transform-origin: bottom;
          transform-box: fill-box;
        }
        #a54ce1b2-ad44-4250-9bca-8b6e66a38051 {
          transform-origin: bottom;
          transform-box: fill-box;
        }
        #e56dcf03-83ea-4559-b88f-d3a51f4c8f93 {
          transform-origin: center;
          transform-box: fill-box;
        }
        // Bacon here
        #a1688cb5-7780-4f15-87b3-da5a00e1fa66 {
          transform-origin: center;
          transform-box: fill-box;
        }
        #be4484ab-3550-42d5-afc6-b69ec9b355b6 {
          transform-origin: center;
          transform-box: fill-box;
        }
      </style>
    </defs>
    <g id="a7630384-81ce-4afa-9010-3f550bbb4395" data-name="Layer 2">
      <g id="b549fa09-0aaa-4d64-bac2-0b5c0380c215" data-name="Hyperinflationo">
        <g
          id="f786f173-0116-4f88-a329-9f99a13e6ebc"
          data-name="roasty"
          class="b9ce9df4-63f1-46ff-98f2-4be89320446a">
          <g id="a1688cb5-7780-4f15-87b3-da5a00e1fa66" data-name="bacon-top">
            <path
              id="bb24f727-1466-4561-893d-2065f8185202"
              data-name="bacon-bot-lean"
              class="b0b4b9c9-db7b-42bd-a02e-dfcc007de99e"
              d="M15.5,89.58,14,93l2.52,2.68-2.3,1.92,1.24,2.92a36.89,36.89,0,0,0,7.34,3.42c3.12.85,7.67-1,11.36,0s7,3.86,11.17,5,7.69-1.5,10.54-.73,7.8,4.94,12,6.07,5.62-1.73,5.62-1.73l-.86-1.48a28.87,28.87,0,0,1,2.36-2.24l-1.27-2.32a2.16,2.16,0,0,0,1-2.84l-.31-.81s-4.82,2.29-9.26,1.09-6.42-5.35-9.72-6.25-7,3.7-10.35,2.8-5.37-5.63-10.09-6.91S25,94.24,22,93.43,15.5,89.58,15.5,89.58Z" />
            <path
              id="ebcfbdcd-022e-480b-87a2-0248fb6ea20d"
              data-name="bacon-top-fat"
              class="a4542691-1be7-4328-8d67-31e78690af0e"
              d="M14,93.09l1.08,3-.86,1.62s5.71,4.36,10.31,4.49,5.79-1.19,9.9.1,9.12,5.25,12,5.36,4.89-2,8.84-1,10.69,5.81,13,5.92a7.59,7.59,0,0,0,4.33-1.4l2.36-2.24-1.27-2.32a16.49,16.49,0,0,1-11.07-.21c-6-2.25-5.16-4.81-8.6-5s-5.65,2.76-8.85,2.33-6.4-6.55-11.91-7.13-10.71.5-11.95.33A13.27,13.27,0,0,1,14,93.09Z" />
          </g>
          <g id="be4484ab-3550-42d5-afc6-b69ec9b355b6" data-name="bacon-bot">
            <path
              id="b404e042-3ecc-4ff2-b230-0915cbef56b2"
              data-name="bacon-bot-lean"
              class="b0b4b9c9-db7b-42bd-a02e-dfcc007de99e"
              d="M24.82,109.18l-1.53,3.38,2.52,2.68-2.3,1.92,1.23,2.92a36.78,36.78,0,0,0,7.35,3.42c3.12.85,7.67-1,11.35,0s7,3.86,11.17,5,7.69-1.5,10.55-.73,7.79,4.94,11.94,6.07,5.63-1.74,5.63-1.74l-.86-1.47a28.87,28.87,0,0,1,2.36-2.24L83,126.09a2.16,2.16,0,0,0,.94-2.84l-.3-.81s-4.83,2.29-9.27,1.09-6.41-5.35-9.72-6.25-7,3.7-10.34,2.8-5.37-5.63-10.1-6.91-9.88.67-12.85-.14S24.82,109.18,24.82,109.18Z" />
            <path
              id="f0434d92-deb0-48b2-9c87-96eed03a9f19"
              data-name="bacon-bot-fat"
              class="a4542691-1be7-4328-8d67-31e78690af0e"
              d="M23.29,112.56l1.08,3-.86,1.62s5.7,4.36,10.31,4.49,5.78-1.19,9.9.1,9.11,5.25,12,5.36,4.9-2,8.85-1,10.68,5.81,13,5.92a7.63,7.63,0,0,0,4.34-1.4l2.36-2.24L83,126.09a16.5,16.5,0,0,1-11.07-.21c-6-2.26-5.16-4.81-8.6-5s-5.66,2.76-8.85,2.33-6.4-6.55-11.91-7.13-10.72.49-12,.33A13.27,13.27,0,0,1,23.29,112.56Z" />
          </g>
          <ellipse
            id="e56dcf03-83ea-4559-b88f-d3a51f4c8f93"
            data-name="coin"
            class="b0c15cb7-00d7-4c18-9318-869140884049"
            cx="13.97"
            cy="109.18"
            rx="4.23"
            ry="7.24"
            transform="translate(-94.61 91.17) rotate(-73.29)" />
        </g>
        <g id="b9c92815-d1c6-4be1-95eb-009565526158" data-name="piggybank">
          <rect
            id="acba3a9f-40d1-4c95-b406-3d673201214d"
            data-name="dollar-far"
            class="bcf93f46-ca58-49c2-9c8d-031f7c23ea05"
            x="30.73"
            y="1.52"
            width="28.15"
            height="57.67"
            transform="translate(4.1 -5.31) rotate(7.11)" />
          <polygon
            id="a789c028-01e0-49c7-94b0-54cee7d952f8"
            data-name="dollar-mid"
            class="a3579065-517d-4c20-80e2-58d89ddc267a"
            points="58.63 53.67 30.64 56.67 25.9 12.5 25.74 11.04 53.72 8.03 58.63 53.67" />
          <rect
            id="beeb1395-71ae-4f2d-a476-13b29f6df40f"
            data-name="dollar-near"
            class="b1d3eefc-d95c-4dd1-b58f-17b5c66563ec"
            x="29.81"
            y="17.51"
            width="28.15"
            height="45.9"
            transform="translate(13.49 -10.91) rotate(16.71)" />
          <g id="a30d55c5-aef6-42e7-9e4c-0bf936303a80" data-name="pig">
            <path
              id="ebcc89de-ea01-443a-8b4f-11c438fbcc2b"
              data-name="pig-body"
              class="a6675662-dbab-407f-8f50-f07ccc82a97e"
              d="M6.85,122.3c-.48-.23,2.48-5.14,2.26-10.35s-.81-6.09-3.54-13.46S-1.83,81.39.75,70.23,10,46.39,25.23,40c2.24-1.29,15.23-5.56,25.57-4.92,0,0,20.26,1.13,32.66,12.89S96.84,68.69,96.84,68.69s2.94,17.29-7,31.79c0,0-10.44,6.7-10.44,12.18a28.38,28.38,0,0,0,1.82,9.85S79.92,127,67.67,122a1.39,1.39,0,0,1-.86-1.26l0-4.12s-6.11,1.63-7.86,1.49-.54,7.78,0,11.18c.46,3.13-18.65,2.17-19.77-.63s1.11-5.5.22-9.85c0,0-10.5-.16-17.64-4.08-1.27-.76.61,6.67-1.32,8.06S12.5,125.32,6.85,122.3Z" />
            <path
              id="af08a28b-4d36-49d0-b032-e3b7174ad10e"
              data-name="pig-right-eye"
              class="a5b65c57-1f0e-4f77-bfcc-e6bc8ba36c79"
              d="M83.63,64.28c1.49-1.3,4.77,3.8,3.26,4.77S82.4,65.6,83.63,64.28Z" />
            <path
              id="ab1a8d0b-9ad4-4334-aef2-3eb43acffbe5"
              data-name="pig-left-eye"
              class="a5b65c57-1f0e-4f77-bfcc-e6bc8ba36c79"
              d="M92.72,63.55c1.7-.83,2.36,4.7,1.54,5S91.73,64.16,92.72,63.55Z" />
            <g id="bc7de6b1-6a8b-4c32-a560-83a9927f43a2" data-name="pig-nose">
              <g
                id="a72e7b7f-864d-4d23-b4a1-ec2fe41c02b3"
                data-name="pig-nose-back">
                <path
                  class="af46535f-d366-431f-8f44-114a758652dc"
                  d="M92.79,68.53s10.73,3,9,15.82-9.2,14.4-14.33,13-6.74-10.48-5.08-19.08S91.07,68.16,92.79,68.53Z" />
                <polyline
                  class="af46535f-d366-431f-8f44-114a758652dc"
                  points="96.64 68.94 94.11 98.19 89.24 97.69 92.42 68.49 96.64 68.94" />
              </g>
              <g
                id="fdc29d92-c6fb-41ca-be8a-b7efc358a520"
                data-name="pig-nose-front">
                <path
                  class="aa035127-b50a-4530-a148-59d508e088a7"
                  d="M96.89,69s10.73,3,9,15.82-9.2,14.4-14.33,13S84.81,87.3,86.47,78.71,95.17,68.61,96.89,69Z" />
                <path
                  class="a5b65c57-1f0e-4f77-bfcc-e6bc8ba36c79"
                  d="M104,81.47s.54,3.22,0,3.76C104,85.23,103,83,104,81.47Z" />
                <path
                  class="a5b65c57-1f0e-4f77-bfcc-e6bc8ba36c79"
                  d="M94.83,82.43s-1.57,1.35-.58,4.14C94.25,86.57,95,86,94.83,82.43Z" />
              </g>
            </g>
            <g
              id="b3094268-c03a-4414-9cac-98f3b3789a1b"
              data-name="pig-right-ear">
              <path
                class="a6675662-dbab-407f-8f50-f07ccc82a97e"
                d="M82.86,47.4s3.64-5.75,6.51-10.82-3.05-11.15-5-10.59-14.61,9.33-14.61,9.33l1.77,7.83L82.85,47.6" />
              <path
                class="aa035127-b50a-4530-a148-59d508e088a7"
                d="M86.93,27.21s-11.84,12.47-4,20.31c0,0,3.64-5.75,6.51-10.82S87.36,27,86.93,27.21" />
            </g>
            <g
              id="bf5986bf-eba9-4b31-969c-ae325f537f10"
              data-name="pig-left-ear">
              <path
                class="a6675662-dbab-407f-8f50-f07ccc82a97e"
                d="M41.56,44.09S58.93,23.17,63.85,24.78c2.59.85,4.58,5.94,5.88,10.54,1.16,4.11,1.77,7.83,1.77,7.83s-9.92-3.31-15.26,4.72C53.5,52.36,41.56,44.09,41.56,44.09Z" />
              <path
                class="aa035127-b50a-4530-a148-59d508e088a7"
                d="M54.57,49.2s4.48-20.89,8.73-20.89,8.26,15,8.26,15S60.14,39.89,54.57,49.2Z" />
            </g>
            <g id="ea9f8d27-3873-4919-b80b-5b656d014ac8" data-name="pig-light">
              <path
                class="ad4c723e-c7a2-404a-992e-bf3ecd161101"
                d="M33.82,41.66c1.78-.44,3.54-1,5.33-1.37a25.46,25.46,0,0,1,5.22-.54,1.25,1.25,0,0,0,0-2.5,30.19,30.19,0,0,0-5.76.6c-1.83.39-3.63.95-5.45,1.4a1.25,1.25,0,0,0,.66,2.41Z" />
              <path
                class="ad4c723e-c7a2-404a-992e-bf3ecd161101"
                d="M29.84,42.77a1.25,1.25,0,0,0,0-2.5,1.25,1.25,0,0,0,0,2.5Z" />
            </g>
          </g>
        </g>
        <g
          id="a54ce1b2-ad44-4250-9bca-8b6e66a38051"
          data-name="fire"
          class="b9ce9df4-63f1-46ff-98f2-4be89320446a">
          <path
            id="f2cf078a-9eb0-42e9-9294-5d212d225c48"
            data-name="fire-outer"
            class="b37b7876-7b12-40a6-ab58-753e079b1bef"
            d="M83.86,58.41a35.46,35.46,0,0,0,0,14.43C85.45,81.4,81.74,92.3,75,101.75S65.1,115.18,51.51,116s-29-2.79-35.73-18.15-8.21-38.2,1.56-47.4c0,0-1.13,8,7.08,13,0,0-4.73-38.66,29.83-51.44,0,0-5.65,10.35,8.34,29.86A60,60,0,0,1,73.71,73.64S74.2,64.81,83.86,58.41Z" />
          <path
            id="a9105e50-2e5e-48fe-bb4d-2873ab11d2cf"
            data-name="fire-inner"
            class="bc79d2ef-b626-4c81-9eec-ec986ad469fc"
            d="M33.37,84.27S15.19,114,50.23,116C67.71,116,67.62,95.22,63,87.45S42.29,69.62,45.73,50.11c0,0-13.64,17.61-7.95,32.44S39,93.47,39,93.47,33.28,88.38,33.37,84.27Z" />
        </g>
      </g>
    </g></svg>
</div>

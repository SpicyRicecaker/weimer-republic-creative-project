<script lang="ts">
  import { onMount } from 'svelte';

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

  onMount(async () => {
    // President jumps up and down
    // Article 48 moves right, up and around, right
    // x66 moves up with increasing opacity
    // free-path becomes
    const aniPresident: aniTerm[] = [
      // President go UP TWICE
      [
        document.getElementById('a0b799ee-5511-432b-b27b-d3eb62fb5c16'),
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
    ];
    const ani48: aniTerm[] = [
      [
        // First move left by like 15%
        document.getElementById('a842dbbf-9b4b-44a9-a9f8-b7316d402149'),
        [
          {},
          { transform: 'translateX(15%)' },
          { transform: 'translateX(-13%) translateY(30%) rotate(180deg)' },
          { transform: 'translateX(-7%) translateY(30%) rotate(180deg)' },
        ],
        {
          duration: 5000,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
    ];
    const ani66: aniTerm[] = [
      [
        // Move up and opacity
        document.getElementsByClassName(
          'bb4c5883-3c31-4a60-becf-970c4f64013e'
        )[0] as HTMLElement,
        [{}, { opacity: '1', transform: 'translateY(40%)' }],
        {
          duration: 3000,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
    ];
    const aniFreePath: aniTerm[] = [
      [
        // Move up and opacity
        document.getElementById('a0d06042-00d4-4fe9-8c0a-519a08348a4f'),
        [{}, { opacity: '1'}],
        {
          duration: 2000,
          fill: 'forwards' as FillMode,
          easing: 'ease-in',
        },
      ],
    ];
    // The Bill goes inside of the Reischstag
    const done: Animation[][] = [];
    done.push(await aniAll(aniPresident));
    done.push(await aniAll(ani48));
    done.push(await aniAll(ani66));
    done.push(await aniAll(aniFreePath));
    // Outline
  });
</script>

<style lang="scss">
  @use 'styles/page';
  .president-wrapper {
    width: 75%;
  }
</style>

<div class="main">
  <div class="president-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 441.46 170.42"><defs>
        <style>
          .e7bc2418-9728-4593-890b-b5f6860edf51 {
            font-size: 6.51px;
          }
          .a50fa3e3-70b0-4f54-a24b-0d8b307632c6,
          .a6271120-eded-4f5e-850e-94c557a223b7,
          .e7bc2418-9728-4593-890b-b5f6860edf51 {
            fill: #fff;
          }
          .a6271120-eded-4f5e-850e-94c557a223b7,
          .aca27515-de0e-4080-8e88-77026f2e0ffa,
          .bb4c5883-3c31-4a60-becf-970c4f64013e,
          .e4ef93d0-07ba-41de-b838-c4823c8afe77,
          .e7bc2418-9728-4593-890b-b5f6860edf51 {
            font-family: LEMONMILK-Regular, LEMON MILK;
          }
          .bf225de0-112b-4d52-ba2f-d0552313e1d8 {
            letter-spacing: -0.02em;
          }
          .ac9d4472-43a7-405b-9fb3-90e7534e0641 {
            letter-spacing: 0em;
          }
          .f61dda05-a0b1-43ab-a831-a4c3136dc48d {
            letter-spacing: -0.02em;
          }
          .a6271120-eded-4f5e-850e-94c557a223b7,
          .aca27515-de0e-4080-8e88-77026f2e0ffa {
            font-size: 12px;
          }
          .aca27515-de0e-4080-8e88-77026f2e0ffa {
            fill: #f37476;
          }
          .e046978d-2cf3-47f8-8ee9-12bc4979bd87 {
            letter-spacing: -0.15em;
          }
          .b18fbacd-fca3-4c80-8061-3132140fced6 {
            letter-spacing: -0.02em;
          }
          .b7319520-4961-4809-b08c-490655f41a27 {
            letter-spacing: -0.1em;
          }
          .b94c7858-eeee-45ad-8c86-5e30d91d7793 {
            letter-spacing: -0.07em;
          }
          .bb4c5883-3c31-4a60-becf-970c4f64013e,
          .e4ef93d0-07ba-41de-b838-c4823c8afe77 {
            font-size: 15.83px;
          }
          .bb4c5883-3c31-4a60-becf-970c4f64013e {
            fill: #b9d987;
          }
          .b6dba05f-4f50-4513-a2b6-fa9146f6784d {
            fill: #f7f3a2;
          }
          .b9c9bbbe-c4ad-4506-ade9-913995bd071d,
          .e51e4d9c-9bd0-4b92-b220-387ff174e121 {
            fill: none;
            stroke-miterlimit: 10;
          }
          .e51e4d9c-9bd0-4b92-b220-387ff174e121 {
            stroke: #d0e4aa;
            stroke-width: 3px;
          }
          .ae0b55fe-557a-4e67-b0ad-6d2d9f8a8be4 {
            fill: #979899;
          }
          .a4e05684-a7f2-440a-995b-5afb78fc7b78 {
            fill: #727373;
          }
          .e4bf016e-621a-461b-8a42-968bbbedebf8 {
            fill: #685447;
          }
          .b9c9bbbe-c4ad-4506-ade9-913995bd071d {
            stroke: #cfe4a9;
            stroke-width: 8px;
          }
          #a0d06042-00d4-4fe9-8c0a-519a08348a4f {
            opacity: 0;
          }
          #a842dbbf-9b4b-44a9-a9f8-b7316d402149 {
            transform-origin: center;
            /* transform-box: fill-box; */
          }
        </style>
      </defs>
      <g id="f92bd431-2f4c-4ba5-ac62-4651cc0896bd" data-name="Layer 2">
        <g
          id="f0cd16db-e768-4e22-8bf1-f81427c0984d"
          data-name="Hyperinflationo">
          <g
            id="b5167609-8217-4017-91bb-3a73def0afe8"
            data-name="the-president">
            <g
              id="e8c91ad4-bc4e-43df-bbf4-7b1bb1d765b5"
              data-name="extremist-label">
              <text
                class="e7bc2418-9728-4593-890b-b5f6860edf51"
                transform="translate(376.03 138.71)">
                Suppo
                <tspan
                  class="bf225de0-112b-4d52-ba2f-d0552313e1d8"
                  x="22.85"
                  y="0">
                  r
                </tspan>
                <tspan
                  class="ac9d4472-43a7-405b-9fb3-90e7534e0641"
                  x="27.06"
                  y="0">
                  t
                </tspan>
                <tspan
                  class="f61dda05-a0b1-43ab-a831-a4c3136dc48d"
                  x="32.82"
                  y="0">
                  f
                </tspan>
                <tspan x="36.4" y="0">or</tspan>
              </text>
              <text
                class="aca27515-de0e-4080-8e88-77026f2e0ffa"
                transform="translate(375.12 151.74)">
                Extremist
              </text>
            </g>
            <text
              class="a6271120-eded-4f5e-850e-94c557a223b7"
              transform="translate(375.61 164.33)">
              <tspan class="e046978d-2cf3-47f8-8ee9-12bc4979bd87">P</tspan>
              <tspan x="5.9" y="0">a</tspan>
              <tspan
                class="b18fbacd-fca3-4c80-8061-3132140fced6"
                x="15.15"
                y="0">
                r
              </tspan>
              <tspan x="22.92" y="0">ties</tspan>
            </text>
            <text
              class="a6271120-eded-4f5e-850e-94c557a223b7"
              transform="translate(187.99 167.2)">
              Reischs
              <tspan
                class="b7319520-4961-4809-b08c-490655f41a27"
                x="50.95"
                y="0">
                t
              </tspan>
              <tspan
                class="b94c7858-eeee-45ad-8c86-5e30d91d7793"
                x="56.88"
                y="0">
                a
              </tspan>
              <tspan x="65.24" y="0">g</tspan>
            </text>
            <text
              class="bb4c5883-3c31-4a60-becf-970c4f64013e"
              transform="translate(209.94 94.63)">
              x66
            </text>
            <g id="a842dbbf-9b4b-44a9-a9f8-b7316d402149" data-name="article">
              <rect
                id="b8125323-e218-4c34-a23f-0fa94c831aec"
                data-name="president-bill"
                class="b6dba05f-4f50-4513-a2b6-fa9146f6784d"
                x="71.51"
                y="88.62"
                width="28.7"
                height="39.43" />
              <text
                class="e4ef93d0-07ba-41de-b838-c4823c8afe77"
                transform="translate(78.24 125.5)">
                48
              </text>
            </g>
            <g id="a0b799ee-5511-432b-b27b-d3eb62fb5c16" data-name="president">
              <path
                class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                d="M49.07,135.81c.76.32-.2-.08.23.1l.59.26,1.16.53A18.5,18.5,0,0,1,53.2,138l.36.25c.57.4-.2-.18.11.08l.84.71q.81.75,1.56,1.56c2,2.15,3.74,4.54,5.84,6.61a2.5,2.5,0,0,0,3.53-3.54c-2.2-2.17-4-4.7-6.13-6.93a23,23,0,0,0-3.77-3.19A31.34,31.34,0,0,0,50.4,131a2.52,2.52,0,0,0-3.08,1.75,2.57,2.57,0,0,0,1.75,3.07Z" />
              <path
                class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                d="M47,132.1c.09-.22.1-.2,0,0l-.2.39c-.16.29-.34.56-.52.84-.32.48-.67.95-1,1.42-.73,1-1.45,2-2.13,3a22,22,0,0,0-3.15,7,2.5,2.5,0,1,0,4.82,1.33,15.39,15.39,0,0,1,.51-1.76l.15-.4s.2-.46.08-.2.07-.15.09-.19l.19-.39A26.86,26.86,0,0,1,47.69,140c1.43-2.15,3.16-4.1,4.13-6.52a2.5,2.5,0,0,0-1.74-3.07A2.57,2.57,0,0,0,47,132.1Z" />
              <path
                class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                d="M32.4,110.66c8.75.58,17.45-.51,26.11-1.64a2.57,2.57,0,0,0,2.5-2.5,2.51,2.51,0,0,0-2.5-2.5c-8.66,1.13-17.36,2.22-26.11,1.64a2.52,2.52,0,0,0-2.5,2.5,2.55,2.55,0,0,0,2.5,2.5Z" />
              <path
                class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                d="M43.28,94c1.19,2.92,1.3,6,1.38,9.09.08,3.42.22,6.83.42,10.25.4,6.85,1.07,13.68,2,20.48a2.58,2.58,0,0,0,2.5,2.5c1.21,0,2.68-1.15,2.5-2.5-.92-7-1.6-14-2-21-.2-3.41-.31-6.81-.4-10.21s-.27-6.82-1.55-10A2.58,2.58,0,0,0,45,90.94,2.5,2.5,0,0,0,43.28,94Z" />
              <circle
                class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                cx="45.99"
                cy="78.09"
                r="17.36" />
            </g>
            <text
              class="a6271120-eded-4f5e-850e-94c557a223b7"
              transform="translate(0 51.38)">
              The President
            </text>
            <g
              id="e1d2ddee-4d08-4c8a-b1b6-b905510fc567"
              data-name="extremist-graph">
              <polyline
                class="e51e4d9c-9bd0-4b92-b220-387ff174e121"
                points="414.86 118.72 414.86 5.23 422.61 17.01" />
              <rect
                class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                x="393.3"
                width="15.9"
                height="118.72" />
            </g>
            <g id="bca497f5-4ae4-4960-b011-1dd555c578b2" data-name="members">
              <g
                id="ef58806f-826b-4e54-9619-e27ec59081cd"
                data-name="member-right">
                <path
                  class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                  d="M238.24,86A10.13,10.13,0,0,1,240,87.65l-.39-.5A39.93,39.93,0,0,1,242,91.62a2.5,2.5,0,1,0,4.32-2.52c-.63-1.08-1.07-2.26-1.67-3.35a10.56,10.56,0,0,0-1.36-1.94,11.25,11.25,0,0,0-1.55-1.37,2.73,2.73,0,0,0-1.76-.73,2.49,2.49,0,0,0-2.5,2.5,2.38,2.38,0,0,0,.73,1.77Z" />
                <path
                  class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                  d="M237.79,82.67l0,.06.39-.51a7,7,0,0,1-1.13,1c-.37.3-.75.61-1.12.94a10,10,0,0,0-2.18,2.67,2.65,2.65,0,0,0-.25,1.93,2.53,2.53,0,0,0,1.15,1.49,2.5,2.5,0,0,0,1.93.25A2.54,2.54,0,0,0,238,89.4a6.14,6.14,0,0,1,.6-.93l-.39.51a11.19,11.19,0,0,1,1.69-1.68l.92-.75a7.4,7.4,0,0,0,1.26-1.36,1.82,1.82,0,0,0,.29-.93,1.85,1.85,0,0,0,0-1,2.58,2.58,0,0,0-1.15-1.5,2.5,2.5,0,0,0-1.93-.25l-.59.25a2.43,2.43,0,0,0-.9.9Z" />
                <path
                  class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                  d="M240.14,68.13a9.06,9.06,0,0,1-.4,3.48c-.34,1.38-.65,2.77-.93,4.16-.59,2.84-1,5.71-1.42,8.59a2.5,2.5,0,0,0,2.5,2.5,2.58,2.58,0,0,0,2.5-2.5c.33-2.48.82-5.3,1.37-7.88s1.69-5.59,1.38-8.35a2.57,2.57,0,0,0-2.5-2.5c-1.23.06-2.66,1.11-2.5,2.5Z" />
                <circle
                  class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                  cx="244.36"
                  cy="62.2"
                  r="7.03" />
                <path
                  class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                  d="M233.92,69a12.68,12.68,0,0,0,6,9.64,5.07,5.07,0,0,0,3.88.67,8.77,8.77,0,0,0,2.68-1.21,10.54,10.54,0,0,0,3.83-4.28,2.57,2.57,0,0,0-.89-3.43,2.54,2.54,0,0,0-3.42.9,7.4,7.4,0,0,1-.5.92c-.07.12-.18.38-.29.44.18-.1.26-.33,0,0a7.39,7.39,0,0,1-.67.7c-.09.08-.26.31-.39.34l.16-.12-.22.15a8.86,8.86,0,0,1-.9.53c-.07,0-.53.25-.17.09s-.21.07-.28.09a1.51,1.51,0,0,1-.46.13.8.8,0,0,1,.59,0l-.18,0c-.56-.3.45.29-.09-.05l-.47-.28a1.73,1.73,0,0,1-.43-.3c.12.2.3.25,0,0s-.48-.43-.71-.66-.45-.65-.7-.8l.12.16-.15-.22c-.1-.15-.2-.3-.29-.45s-.32-.56-.47-.85a2.87,2.87,0,0,1-.18-.4c.17.62,0,.09,0-.06a8.57,8.57,0,0,1-.3-1c0-.17-.07-.35-.1-.52-.11-.51,0,.53,0,0a2.55,2.55,0,0,0-2.5-2.5,2.52,2.52,0,0,0-2.5,2.5Z" />
              </g>
              <g
                id="b0264a22-650e-40ea-9653-a5e7c1a508cc"
                data-name="member-mid">
                <path
                  class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                  d="M223.76,78.73a15.37,15.37,0,0,1,1.3.86l-.51-.39a7,7,0,0,1,1.24,1.25l-.39-.5c.86,1.12,1.48,2.39,2.32,3.52a2.78,2.78,0,0,0,1.5,1.15,2.58,2.58,0,0,0,1.92-.25,2.5,2.5,0,0,0,1.15-1.5A2.43,2.43,0,0,0,232,81c-.75-1-1.32-2.14-2-3.16A10.5,10.5,0,0,0,228.47,76a14.8,14.8,0,0,0-2.19-1.57,2.5,2.5,0,0,0-2.52,4.32Z" />
                <path
                  class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                  d="M222.77,75a3.19,3.19,0,0,1-.26.38l.39-.5c-.58.73-1.3,1.34-1.91,2a13.34,13.34,0,0,0-1.17,1.52,9.17,9.17,0,0,0-.87,1.78,2.5,2.5,0,0,0,3.67,2.83l.51-.39a2.53,2.53,0,0,0,.64-1.11l.06-.14-.25.6a7.41,7.41,0,0,1,.94-1.58l-.39.5c.41-.52.86-1,1.32-1.48a10.16,10.16,0,0,0,1.64-1.94,2.5,2.5,0,0,0-.9-3.42,2.49,2.49,0,0,0-1.92-.25,2.61,2.61,0,0,0-1.5,1.15Z" />
                <path
                  class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                  d="M223.4,61a6.17,6.17,0,0,1,.09,1.56c0,.65-.12,1.3-.2,1.95-.16,1.34-.31,2.68-.43,4-.25,2.74-.39,5.49-.44,8.24a2.5,2.5,0,0,0,5,0q.08-4.29.47-8.56c.26-2.82,1-5.73.33-8.54A2.5,2.5,0,0,0,223.4,61Z" />
                <circle
                  class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                  cx="226.85"
                  cy="54.21"
                  r="7.03" />
                <path
                  class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                  d="M217.32,62.49a12.39,12.39,0,0,0,6.73,8.39,5.08,5.08,0,0,0,4,.4,10.12,10.12,0,0,0,2.88-1.71,10.58,10.58,0,0,0,3.27-4.88,2.52,2.52,0,0,0-1.74-3.08,2.57,2.57,0,0,0-3.08,1.75,2.38,2.38,0,0,0-.18.51c.12-.3.15-.36.07-.19l-.12.24a7.35,7.35,0,0,1-.51.85c-.27.41-.1,0,0,0a5,5,0,0,0-.35.41,7.6,7.6,0,0,1-.71.68c-.27.24-.13.22,0,0a1.57,1.57,0,0,1-.45.31l-.47.27-.16.08c-.24.12-.21.11.1,0-.11.1-.55,0-.23.08s.51.1.17,0c-.57-.24.27.16-.17-.05l-.47-.24c-.29-.16-.56-.33-.83-.51a2,2,0,0,1-.36-.26c.42.45.07,0-.05,0s-.47-.44-.7-.68-.24-.26-.35-.39c-.26-.3-.05-.19,0,0-.07-.28-.44-.62-.59-.88s-.29-.51-.42-.77l-.15-.32.11.27a2.3,2.3,0,0,0-.18-.5c-.11-.34-.2-.68-.28-1a2.52,2.52,0,0,0-3.08-1.75,2.55,2.55,0,0,0-1.74,3.08Z" />
              </g>
              <g
                id="a13c6fcf-c360-4a4b-8746-42872d2c456d"
                data-name="member-left">
                <path
                  class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                  d="M210.58,83.2l.19.08-.6-.25a9.17,9.17,0,0,1,2,1.09l-.51-.39a44.42,44.42,0,0,1,3.44,3.68,2.59,2.59,0,0,0,1.77.73,2.51,2.51,0,0,0,2.5-2.5,2.58,2.58,0,0,0-.74-1.77c-.89-.88-1.61-1.9-2.48-2.8a11.53,11.53,0,0,0-1.82-1.53,14.36,14.36,0,0,0-2.44-1.16,2.52,2.52,0,0,0-1.93.25,2.48,2.48,0,0,0-.89,3.42l.39.51a2.5,2.5,0,0,0,1.1.64Z" />
                <path
                  class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                  d="M208.7,79.87l0,.08.25-.6a6.51,6.51,0,0,1-.77,1.23c-.3.41-.59.81-.86,1.23A10.13,10.13,0,0,0,205.86,85a2.62,2.62,0,0,0,.25,1.92,2.58,2.58,0,0,0,1.5,1.15,2.49,2.49,0,0,0,3.07-1.75,7.87,7.87,0,0,1,.35-1.07l-.25.6A11.77,11.77,0,0,1,212,83.75c.23-.32.47-.64.7-1a7.43,7.43,0,0,0,.83-1.58,2.52,2.52,0,0,0-1.75-3.08,2.55,2.55,0,0,0-1.93.25l-.5.39a2.55,2.55,0,0,0-.65,1.11Z" />
                <path
                  class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                  d="M207.2,65.24a7.64,7.64,0,0,1,.5,3.19c0,1.38.09,2.77.17,4.16q.24,4.2.8,8.37a2.57,2.57,0,0,0,2.5,2.5c1.21,0,2.68-1.11,2.5-2.5-.38-2.89-.66-5.79-.82-8.7-.15-2.7.19-5.79-.83-8.35a2.58,2.58,0,0,0-3.08-1.74,2.5,2.5,0,0,0-1.74,3.07Z" />
                <circle
                  class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                  cx="209.73"
                  cy="58.4"
                  r="7.03" />
                <path
                  class="a50fa3e3-70b0-4f54-a24b-0d8b307632c6"
                  d="M201.41,67.65a12.68,12.68,0,0,0,8,7.66,5.21,5.21,0,0,0,4-.19,8.86,8.86,0,0,0,2.29-1.79A10.43,10.43,0,0,0,218.48,68a2.5,2.5,0,1,0-4.82-1.33,9.41,9.41,0,0,1-.24,1l-.15.45c-.2.58.24-.45-.05.1-.17.3-.33.61-.52.9a2.09,2.09,0,0,1-.27.39c.43-.43,0,0-.09.09-.21.23-.45.44-.68.66-.44.43.42-.26-.09.08l-.39.26c-.28.17-.29.1,0,0s.32,0,.13,0-.14,0,.13,0a9.75,9.75,0,0,1-1-.29,3.61,3.61,0,0,1-.42-.16c.57.32.05,0-.06,0a7.44,7.44,0,0,1-.78-.44c-.16-.09-.31-.19-.46-.29s-.47-.37-.18-.13-.11-.1-.16-.15l-.4-.36a7.69,7.69,0,0,1-.62-.66l-.23-.27.17.22a4.07,4.07,0,0,0-.32-.44c-.16-.25-.32-.51-.46-.78s-.16-.32-.24-.48c-.23-.46.17.46,0-.07a2.56,2.56,0,0,0-3.08-1.74,2.52,2.52,0,0,0-1.74,3.07Z" />
              </g>
            </g>
            <g
              id="a6aaf83d-39b9-4de8-b30c-8a7ccc0eb428"
              data-name="president-reischstag">
              <polygon
                class="ae0b55fe-557a-4e67-b0ad-6d2d9f8a8be4"
                points="196.98 69.7 210.07 69.7 210.07 79.01 217.06 79.01 217.06 69.7 231.06 69.7 231.06 79.01 237.57 79.01 237.57 69.7 251.21 69.7 251.21 84.32 247.22 90.27 247.22 147.58 200.9 147.58 200.9 90.27 196.98 83.48 196.98 69.7" />
              <polygon
                class="a4e05684-a7f2-440a-995b-5afb78fc7b78"
                points="237.57 69.7 237.57 79.01 231.06 79.01 231.06 69.7 231.35 147.58 247.22 147.58 247.22 90.27 251.21 84.32 251.21 69.7 237.57 69.7" />
              <polygon
                class="e4bf016e-621a-461b-8a42-968bbbedebf8"
                points="224.85 111.66 211.37 125.38 211.6 147.58 238.1 147.58 237.83 125.38 224.85 111.66" />
            </g>
            <path
              id="a0d06042-00d4-4fe9-8c0a-519a08348a4f"
              data-name="free-path"
              class="b9c9bbbe-c4ad-4506-ade9-913995bd071d"
              d="M100.22,92.61h57.95s4-65.52,65.52-65.52,65.52,65.52,65.52,65.52h87.14L362.82,79.08" />
          </g>
        </g>
      </g></svg>
  </div>
</div>

<script lang="ts">
  import { activeView } from './stores';
  import { tick } from 'svelte';
</script>

<style lang="scss">
  @use 'styles/page';

  // .mainpre {
  //   color: white;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  // }

  // // .mainend {
  // //   color: white;
  // //   display: flex;
  // //   flex-direction: column;
  // //   align-items: center;
  // //   justify-content: center;
  // // }

  // h2 {
  //   font-size: 2rem;
  //   font-weight: 100;
  // }

  // .dialogue {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  // }

  // p {
  //   width: 30%;
  //   margin: 1rem;
  //   padding: 0;
  // }

  // .center {
  //   flex: 1;
  // }

  // .main2 {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  // }

  // @media (max-width: 640px) {
  //   p {
  //     width: 90%;
  //   }
  // }
  .treaty-of-versailles-wrapper {
    width: 50%;
  }

  .timeline-wrapper {
    width: 50%;
  }
</style>

<div class="main">
  <div class="treaty-of-versailles-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 233.66 20.11"><defs>
        <style lang="scss">
          .b698d3db-b8f0-424c-8b4c-e0fd825d890a {
            fill: #2b2b2b;
          }
          .b698d3db-b8f0-424c-8b4c-e0fd825d890a,
          .e8cb1ada-0468-4309-b201-8c99478c20a1 {
            opacity: 0;
          }
          .a0aa77a8-54b2-4a94-9e45-7fe47dcb4187 {
            fill: #fff;
          }
          .e8cb1ada-0468-4309-b201-8c99478c20a1 {
            fill: #a0d39b;
          }
          // Treaty of versailles
          #fd43fbde-3f8b-4246-adcf-83ee3744d213 {
            // The first v should turn sideways and red
            // The ers should become smaller
            // The $ should become high opacity
            // The A should become bigger and blue
            &:hover {
              cursor: pointer;
              // Backstab anim
              & #b8a0f993-51e8-401e-ac5e-7ae2101a72d0 {
                transform: rotate(-90deg);
                // Change color
                fill: #f48486;
              }
              // ER
              & #e121b736-069d-464d-b603-82233f5e8adb {
                // Make small
                transform: scale(0.5) translateX(-50%);
                // $
                & #f4055460-32d4-4d22-a13b-f196e80d371c {
                  // Also make the line opacity 100
                  opacity: 100%;
                }
              }
              // BigA
              & #aede5ae7-1476-4434-a40f-65202e3d3be0 {
                // Make big
                // Rotate left
                // Translate left
                transform: scale(1.4) translateX(-50%) rotate(-90deg);
                // Make blue
                fill: #aae0f5;
              }
            }
          }
          // backstab
          #b8a0f993-51e8-401e-ac5e-7ae2101a72d0 {
            transform: rotate(0);
            transform-origin: center;
            transform-box: fill-box;
            transition: 1s;
          }

          // er
          #e121b736-069d-464d-b603-82233f5e8adb {
            transform: scale(1) translateX(0);
            transform-origin: center;
            transform-box: fill-box;
            transition: 1s;
          }
          // sign
          #f4055460-32d4-4d22-a13b-f196e80d371c {
            transform-origin: center;
            transform-box: fill-box;
            transition: 1s;
          }
          // biga
          #aede5ae7-1476-4434-a40f-65202e3d3be0 {
            transform-origin: center;
            transform-box: fill-box;
            transform: scale(1) translateX(0) rotate(0);
            transition: 1s;
          }
        </style>
      </defs>
      <g id="f587267c-64a9-469e-b2d1-0940d89c8a41" data-name="Layer 2">
        <g
          id="b8d228bb-3768-4192-9e01-b836bb3f308d"
          data-name="Hyperinflationo">
          <g
            id="fd43fbde-3f8b-4246-adcf-83ee3744d213"
            data-name="treaty-of-versailles">
            <rect
              class="b698d3db-b8f0-424c-8b4c-e0fd825d890a"
              width="233.66"
              height="20.11" />
            <g id="af4e1339-e384-4fa8-8f79-577dfa86cbb6" data-name="of">
              <path
                class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
                d="M86.6,14.09a4.15,4.15,0,1,1,4.14,4.13A4.16,4.16,0,0,1,86.6,14.09Zm7,0a2.88,2.88,0,1,0-2.88,2.86A2.89,2.89,0,0,0,93.62,14.08Z" />
              <path
                class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
                d="M97.3,11.3v2.15h3V14.7h-3v3.4H96v-8h4.77V11.3Z" />
            </g>
            <path
              id="b8a0f993-51e8-401e-ac5e-7ae2101a72d0"
              data-name="backstab"
              class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
              d="M121.55,2.34l-7.26,16.07h-.17L106.89,2.34h2.62L114.2,13l4.71-10.66Z" />
            <path
              id="aede5ae7-1476-4434-a40f-65202e3d3be0"
              data-name="biga"
              class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
              d="M170,15.69h-7.45l-1.07,2.4H158.8L166.2,2h.15l7.4,16.07h-2.67Zm-.95-2.12-2.77-6.15-2.77,6.15Z" />
            <g id="bffe17b9-87d0-47ed-ae53-6e7bb5cd4ea7" data-name="ailles">
              <path
                class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
                d="M175.5,2.34H178V18.09H175.5Z" />
              <path
                class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
                d="M190.49,15.63v2.46H181V2.34h2.47V15.63Z" />
              <path
                class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
                d="M202,15.63v2.46h-9.5V2.34h2.47V15.63Z" />
              <path
                class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
                d="M206.4,4.78v4h6v2.46h-6v4.36h6.9v2.46h-9.37V2.34h9.37V4.78Z" />
              <path
                class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
                d="M215,15.32l2-1.39a3.93,3.93,0,0,0,3.52,1.93c1.77,0,3.11-.85,3.11-2,0-1.46-2.07-2.34-3.91-3.13s-3.9-1.77-3.9-4.24,2.24-4.38,5.07-4.38a4.56,4.56,0,0,1,4.57,2.81l-1.83,1.27a3,3,0,0,0-2.72-1.66,2.36,2.36,0,0,0-2.6,2c0,1.23,1.46,1.67,3.37,2.49,2.49,1.1,4.43,2.3,4.43,4.78,0,2.79-2.42,4.59-5.62,4.59A5.8,5.8,0,0,1,215,15.32Z" />
            </g>
            <g id="abd96501-4139-43d1-854d-7b641a634422" data-name="treaty">
              <path
                class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
                d="M18,4.8H13.8V18.09H11.32V4.8H7.1V2.34H18Z" />
              <path
                class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
                d="M28.63,18.09,24.4,12H22.46v6.1H20V2.34h4.89A5.21,5.21,0,0,1,30.21,7.4a4.62,4.62,0,0,1-3.12,4.39l4.58,6.3Zm-3.7-8.15a2.69,2.69,0,0,0,2.73-2.6A2.63,2.63,0,0,0,24.93,4.8H22.45V9.94Z" />
              <path
                class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
                d="M35.8,4.78v4h6v2.46h-6v4.36h6.91v2.46H33.33V2.34h9.38V4.78Z" />
              <path
                class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
                d="M55.19,15.69H47.74l-1.08,2.4H44L51.39,2h.14l7.41,16.07H56.26Zm-1-2.12L51.47,7.42l-2.78,6.15Z" />
              <path
                class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
                d="M68.6,4.8H64.38V18.09H61.9V4.8H57.68V2.34H68.6Z" />
              <path
                class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
                d="M74.49,11.36l-5.22-9h2.78l3.66,6.27,3.68-6.27h2.78l-5.23,9v6.73H74.49Z" />
            </g>
            <g id="e121b736-069d-464d-b603-82233f5e8adb" data-name="ers">
              <path
                class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
                d="M125.77,4.78v4h6v2.46h-6v4.36h6.91v2.46H123.3V2.34h9.38V4.78Z" />
              <path
                class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
                d="M143.9,18.09,139.66,12h-1.93v6.1h-2.47V2.34h4.89a5.21,5.21,0,0,1,5.33,5.06,4.62,4.62,0,0,1-3.11,4.39l4.58,6.3Zm-3.7-8.15a2.69,2.69,0,0,0,2.72-2.6A2.62,2.62,0,0,0,140.2,4.8h-2.48V9.94Z" />
              <g id="aad4c939-553f-4a23-b432-0e382b65e7b8" data-name="money">
                <rect
                  id="f4055460-32d4-4d22-a13b-f196e80d371c"
                  data-name="SIGN"
                  class="e8cb1ada-0468-4309-b201-8c99478c20a1"
                  x="152.69"
                  width="1.59"
                  height="20.11" />
                <path
                  class="a0aa77a8-54b2-4a94-9e45-7fe47dcb4187"
                  d="M147.69,15.32l1.95-1.39a3.94,3.94,0,0,0,3.53,1.93c1.76,0,3.1-.85,3.1-2,0-1.46-2.07-2.34-3.9-3.13s-3.9-1.77-3.9-4.24,2.24-4.38,5.07-4.38a4.58,4.58,0,0,1,4.57,2.81l-1.84,1.27a2.94,2.94,0,0,0-2.71-1.66,2.35,2.35,0,0,0-2.6,2c0,1.23,1.45,1.67,3.37,2.49,2.49,1.1,4.42,2.3,4.42,4.78,0,2.79-2.42,4.59-5.61,4.59A5.8,5.8,0,0,1,147.69,15.32Z" />
              </g>
            </g>
          </g>
        </g>
      </g></svg>
  </div>
  <div class="timeline-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315.4 120.14"><defs>
        <style lang="scss">
          .e1ce1418-f4cb-4d56-ac39-73b3cdb7f8a5 {
            fill: #2b2b2b;
            opacity: 0;
          }
          .f7c51255-082e-4fa1-baeb-340565b8500e {
            font-size: 12px;
            font-family: LEMONMILK-Regular, LEMON MILK;
          }
          .b50f8612-ce71-4f24-a2eb-8ce8e0741fc5,
          .f7c51255-082e-4fa1-baeb-340565b8500e {
            fill: #fff;
          }
          .bf518d6c-a110-4b4c-9910-be0200e77c5d {
            letter-spacing: 0.01em;
          }
          .e22079e4-e706-47fe-9e8a-b5fcbc6500ab {
            letter-spacing: -0.1em;
          }
          .b7930027-f6e5-4c99-9c47-bfa8d6cfa921,
          .ba23c9e1-30cb-4646-b91a-2b187e469dda {
            fill: none;
            stroke-miterlimit: 10;
          }
          .ba23c9e1-30cb-4646-b91a-2b187e469dda {
            stroke: #fff;
          }
          .b7930027-f6e5-4c99-9c47-bfa8d6cfa921 {
            stroke: #ffe091;
          }
          // Hyperinflation
          #bfc7abb3-cc4a-40b4-a9fe-e11b184b9a9b {
            &:hover {
              cursor: pointer;
              // Right arrow
              & #a1b07272-fbea-4b05-b825-eb36280737bc {
                transform: translateX(25%);
                & polyline {
                  stroke: #f1c232;
                }
              }
            }
          }
          // Great Depression
          #a1f0e95e-1a54-43d0-ac3b-053fbe09b365 {
            &:hover {
              cursor: pointer;
              // Left arrow
              & #e789e433-5750-4341-8a7b-75df030220b4 {
                transform: translateX(-25%);
                fill: #f1c232;
                & polyline {
                  stroke: #f1c232;
                }
              }
            }
          }
          // Great Depression point
          #f083e406-776b-4293-8c73-fcab029250e6 {
            transform-origin: center;
            transform-box: fill-box;
            transform: scale(1);
            transition: 1s;
            &:hover {
              // Point
              tranform: scale(1.5);
            }
          }
          // Hyperinflation arrow
          #a1b07272-fbea-4b05-b825-eb36280737bc {
            transform-origin: center;
            transform-box: fill-box;
            transform: translateX(0);
            transition: 0.2s;
          }
          // Hyperinflation Point
          #edd6c035-256b-44d3-954f-d83f805c059a {
            transform-origin: center;
            transform-box: fill-box;
            transform: scale(1);
            transition: 1s;
            &:hover {
              // Point
              transform: scale(1.5);
            }
          }
          // Great Depression arrow
          #e789e433-5750-4341-8a7b-75df030220b4 {
            transform-origin: center;
            transform-box: fill-box;
            transition: 0.2s;
            transform: translateX(0);
          }
        </style>
      </defs>
      <g id="eb659b4f-7e66-4c4b-b9f4-250761d0709f" data-name="Layer 2">
        <g
          id="b662dfee-6f6d-4b24-9f05-51c0212ec471"
          data-name="Hyperinflationo">
          <g id="bf5d5dad-1664-4554-a7e4-6dcaaa9139cf" data-name="timeline">
            <g
              id="bfc7abb3-cc4a-40b4-a9fe-e11b184b9a9b"
              data-name="hyperinflation"
              on:click={async () => ($activeView = 1)}>
              <rect
                class="e1ce1418-f4cb-4d56-ac39-73b3cdb7f8a5"
                x="177.01"
                y="56.69"
                width="138.39"
                height="17.66" />
              <text
                class="f7c51255-082e-4fa1-baeb-340565b8500e"
                transform="translate(179.99 70.09)">
                Hyperinf
                <tspan
                  class="bf518d6c-a110-4b4c-9910-be0200e77c5d"
                  x="59.23"
                  y="0">
                  l
                </tspan>
                <tspan
                  class="e22079e4-e706-47fe-9e8a-b5fcbc6500ab"
                  x="66.18"
                  y="0">
                  a
                </tspan>
                <tspan x="74.26" y="0">tion</tspan>
              </text>
              <g
                id="a1b07272-fbea-4b05-b825-eb36280737bc"
                data-name="right-arrow">
                <polyline
                  class="ba23c9e1-30cb-4646-b91a-2b187e469dda"
                  points="296.43 70.59 300.56 65.52 296.43 60.46" />
                <polyline
                  class="ba23c9e1-30cb-4646-b91a-2b187e469dda"
                  points="299.78 70.59 303.92 65.52 299.78 60.46" />
              </g>
            </g>
            <g
              id="a1f0e95e-1a54-43d0-ac3b-053fbe09b365"
              data-name="the-great-depression"
              on:click={async () => {
                $activeView = 2;
                await tick();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
              <rect
                class="e1ce1418-f4cb-4d56-ac39-73b3cdb7f8a5"
                y="102.48"
                width="179.28"
                height="17.66" />
              <text
                class="f7c51255-082e-4fa1-baeb-340565b8500e"
                transform="translate(28.46 115.88)">
                The Gre
                <tspan
                  class="e22079e4-e706-47fe-9e8a-b5fcbc6500ab"
                  x="52.15"
                  y="0">
                  a
                </tspan>
                <tspan x="60.23" y="0">t Depression</tspan>
              </text>
              <g
                id="e789e433-5750-4341-8a7b-75df030220b4"
                data-name="left-arrow">
                <polyline
                  class="ba23c9e1-30cb-4646-b91a-2b187e469dda"
                  points="18.38 106.24 14.25 111.31 18.38 116.37" />
                <polyline
                  class="ba23c9e1-30cb-4646-b91a-2b187e469dda"
                  points="15.03 106.24 10.9 111.31 15.03 116.37" />
              </g>
            </g>
            <path
              class="b7930027-f6e5-4c99-9c47-bfa8d6cfa921"
              d="M119,0s-2.76,65.66,45,65.66c0,0-64.17,9-64.17,27.17" />
            <circle
              id="edd6c035-256b-44d3-954f-d83f805c059a"
              data-name="the-great-depression-point"
              class="b50f8612-ce71-4f24-a2eb-8ce8e0741fc5"
              cx="169.4"
              cy="65.52"
              r="3.09" />
            <circle
              id="f083e406-776b-4293-8c73-fcab029250e6"
              data-name="hyperinflation-point"
              class="b50f8612-ce71-4f24-a2eb-8ce8e0741fc5"
              cx="100.31"
              cy="97.42"
              r="3.09" />
          </g>
        </g>
      </g></svg>
  </div>
</div>

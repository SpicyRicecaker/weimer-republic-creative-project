<script lang="ts">
  import { CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement } from "chart.js";
  import type { ChartConfiguration } from "chart.js";
  import { onMount } from "svelte";

  const updateChart = () => {
    // First update labels
    charInfo.data.labels = charData.labels.slice(0, time + 1);
    // Then update graphs
    charInfo.data.datasets[0].data = charData.data.slice(0, time + 1);
    // Invoke myChart.update()
    myChart.update();
  };

  export let time = 0;
  let myChart: Chart;

  let charData = {
    labels: [
      "Jan 1914",
      "Jan 1918",
      "Jan 1919",
      "Jul 1919",
      "Jan 1920",
      "Jul 1920",
      "Jan 1921",
      "Jul 1921",
      "Jan 1922",
      "Jul 1922",
      "Jan 1923",
      "Jul 1923",
      "Dec 1923",
    ],
    data: [4, 5, 8, 14, 26, 36, 62, 72, 182, 470, 17000, 375000, 4000000000000],
  };

  let charInfo: ChartConfiguration = {
    type: "line",
    data: {
      labels: ["Jan 1914"],
      datasets: [
        {
          label: "Exchange rate of marks to dollar",
          fill: true,
          data: [4],
          pointBorderColor: [
            "#1155cc",
            "#f1c232",
            "#f1c232",
            "#f1c232",
            "#f1c232",
            "#f1c232",
            "#f1c232",
            "#f1c232",
            "#f1c232",
            "#f1c232",
            "#ff5151", //Start of payments
            "#ff5151",
            "#ff5151",
          ],
          pointBackgroundColor: [
            "#1155cc40",
            "#f1c23240",
            "#f1c23240",
            "#f1c23240",
            "#f1c23240",
            "#f1c23240",
            "#f1c23240",
            "#f1c23240",
            "#f1c23240",
            "#f1c23240",
            "#cc000040",
            "#cc000040", //Start of payments
            "#cc000040",
          ],
          backgroundColor: [
            "#cc000040",
            "#cc000040",
            "#cc000040",
            "#cc000040",
            "#cc000040",
            "#cc000040",
            "#cc000040",
            "#cc000040",
            "#cc000040",
            "#cc000040",
            "#cc000040",
            "#cc000040",
            "#cc000040",
          ]
          // pointBorderWidth: 1,
          // pointRadius: 6,
          // pointHitRadius: 12,
          // pointStyle: 'rect',
          // borderWidth: 2,
          // borderColor: '#f1c232',
          // backgroundColor: '#f1c23220',
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  onMount(async () => {
    let ctx = (
      document.getElementById("myChart") as HTMLCanvasElement
    ).getContext("2d") as CanvasRenderingContext2D;
    Chart.register(LinearScale, LineController, LineElement, CategoryScale, PointElement);
    myChart = new Chart(ctx, charInfo);
  });
</script>

<div><canvas id="myChart" /></div>

<!-- <div>{charData.labels[time]} - {charData.data[time]}:1</div> -->
<!-- <button
  on:click={() => {
    charInfo.data.labels.push('123123123123');
    myChart.update();
  }} /> -->
<input type="range" min="0" max="12" bind:value={time} on:input={updateChart} />

<style lang="scss">
  div {
    width: 50%;
    // flex: 1;
  }

  input[type="range"] {
    width: 50%;
    opacity: 0.5;
    transition: 0.5s;
    &:hover {
      opacity: 1;
    }
  }
</style>

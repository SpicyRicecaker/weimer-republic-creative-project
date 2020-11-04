<script lang="ts">
  import Chart from 'chart.js';
  import { onMount } from 'svelte';

  const updateChart = () => {
    // First update labels
    charInfo.data.labels = charData.labels.slice(0, time + 1);
    // Then update graphs
    charInfo.data.datasets[0].data = charData.data.slice(0, time + 1);
    // Invoke myChart.update()
    myChart.update();
  };

  let time = 0;
  let myChart;

  let charData = {
    labels: [
      'Jan 1914',
      'Jan 1918',
      'Jan 1919',
      'Jul 1919',
      'Jan 1920',
      'Jul 1920',
      'Jan 1921',
      'Jul 1921',
      'Jan 1922',
      'Jul 1922',
      'Jan 1923',
      'Jul 1923',
      'Dec 1923',
    ],
    data: [4, 5, 8, 14, 26, 36, 62, 72, 182, 470, 17000, 375000, 4000000000000],
  };

  let charInfo = {
    type: 'line',
    data: {
      labels: ['Jan 1914'],
      datasets: [
        {
          label: 'marks to dollar',
          data: [4],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  onMount(async () => {
    let ctx = (document.getElementById(
      'myChart'
    ) as HTMLCanvasElement).getContext('2d');
    myChart = new Chart(ctx, charInfo);
  });
</script>

<canvas id="myChart" width="3" height="1" />

<div>{charData.labels[time]}, {charData.data[time]}</div>
<!-- <button
  on:click={() => {
    charInfo.data.labels.push('123123123123');
    myChart.update();
  }} /> -->
<input
  id="threshold"
  type="range"
  min="0"
  max="12"
  bind:value={time}
  on:input={updateChart} />

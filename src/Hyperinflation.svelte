<script lang="ts">
  import Chart from './Chart.svelte';
  let time = 1;
  let dataset = {
    type: 'line',
    data: {
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
      datasets: [
        {
          label: 'marks to dollar',
          data: [
            4,
            5,
            8,
            14,
            26,
            36,
            62,
            72,
            182,
            470,
            17000,
            375000,
            4000000000000,
          ],
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
  };
</script>

<style lang="scss">
  .main {
    height: 90%;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="main">
  <h2>Value of marks over time</h2>
  <Chart />
  <p>(visual representation of money here, src.)</p>
  {#if dataset.data.datasets[0].data[time] === 4000000000000}
    <div>
      <ul>
        <li>life savings gone up in flames</li>
        <li>hard work destroyed</li>
        <li>loss of capacity of surprise</li>
      </ul>
    </div>
  {/if}
</div>

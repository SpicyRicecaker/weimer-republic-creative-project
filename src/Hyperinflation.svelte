<script lang="ts">
  import Chart from './Chart.svelte';
  let time = 1;
  let exchangeRate = [
    { date: 'January 1914', marks: 4 },
    { date: 'January 1918', marks: 5 },
    { date: 'January 1919', marks: 8 },
    { date: 'July 1919', marks: 14 },
    { date: 'January 1920', marks: 26 },
    { date: 'July 1920', marks: 37 },
    { date: 'January 1921', marks: 62 },
    { date: 'July 1921', marks: 73 },
    { date: 'January 1922', marks: 182 },
    { date: 'July 1922', marks: 470 },
    { date: 'January 1923', marks: 17000 },
    { date: 'July 1923', marks: 375000 },
    { date: 'December 1923', marks: '4000000000000' },
  ];
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
  <div>{exchangeRate[time].date}, {exchangeRate[time].marks}</div>
  <input id="threshold" type="range" min="0" max="12" bind:value={time} />
  {#if exchangeRate[time].marks === '4000000000000'}
    <div>
      <ul>
        <li>life savings gone up in flames</li>
        <li>hard work destroyed</li>
        <li>loss of capacity of surprise</li>
      </ul>
    </div>
  {/if}
</div>

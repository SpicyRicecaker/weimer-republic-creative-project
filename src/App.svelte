<script lang="ts">
  let money = 1;
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

<style>
  main {
    text-align: center;
    padding: 1rem;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
  }

  h2 {
    color: #ff3e00;
    text-transform: uppercase;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>The Fall of the Weimar Republic</h1>
  <h2>Money Is a Belief</h2>
  <p>There is only a finite amount of available goods</p>
  <p>
    10
    <b>apples</b>/
    {money}
    <b>mark(s) in circulation</b>
    =
    {Math.round((10 / money) * 100) / 100}
    <b>value of money</b>
  </p>
  <p>Finite goods / Amount of Money</p>
  <input id="threshold" type="range" min="1" max="100" bind:value={money} />
  <h2>Value of marks over time</h2>
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
  <h2>Article 48</h2>
  <div>
    (Show the entire democratic process of the weimar constitution. Hovering
    over each area to get more info. Hovering over the president slices through
    the entire process, with facts of article 48 also popping up)
  </div>
  <h2>State of Parties in Weimar</h2>
  <div>hard to pass laws?</div>
  <h2>Postbellum sentiments</h2>
  <div>
    forced terms of the treaty of versailles. surrender of the civil government
    and the military's dissatisfaction. backstabber theory.
  </div>
</main>

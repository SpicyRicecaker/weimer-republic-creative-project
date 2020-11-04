<script lang="ts">
  export let money = 1;
</script>

<style lang="scss">

</style>

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

<script lang="ts">
  import { tick } from 'svelte';

  import App from './App.svelte';
  import Hyperinflation from './hyperinflation.svelte';

  export let views;
</script>

<style lang="scss">
  $munchingOrange: #f1c232;
  h1 {
    text-align: center;
    font-family: 'Bebas Neue', cursive;
    color: white;
    /* text-transform: uppercase; */
    font-size: 4rem;
    font-weight: 100;
  }

  .title-page {
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  button {
    // Sets to white
    color: white;
    font-size: 4rem;
    // Clears button
    background: none;
    outline: none;
    border: none;
    // Sets button area
    padding: 1rem;
    // Gets rid of slightly rounded corners
    border-radius: 0;
    transition: 1s;
    &:hover {
      color: $munchingOrange;
      cursor: pointer;
    }
    &:active {
      transition: 0s;
      // background: $munchingOrange;
      background: #2b2b2b;
      color: white;
    }
  }
</style>

<div class="title-page">
  <h1>
    The Fall of the Weimar Republic
    <div style="font-size: 1rem; font-weight: normal; font-family: arial">
      by Andy Li
    </div>
  </h1>
  <!-- <p>by Andy Li</p> -->
  <button
    on:click|once={async () => {
      views = [...views, { label: 'Hyperinflation', value: 0, component: Hyperinflation }];
      await tick();
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }}>&#8595;</button>
</div>

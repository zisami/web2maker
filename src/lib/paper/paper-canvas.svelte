<script>
  export let resize = true;

  import { paper } from "paper";
  import newPaperCanvas from "$lib/paper/paper-canvas.js";
</script>

<style>
  /* Scale canvas with resize attribute to full size */
  canvas[resize] {
    width: 100%;
    height: 100%;
  }
canvas{ 
  border: 1px solid black; 
  }
</style>

{#if !resize}
  <canvas use:newPaperCanvas />
{:else}
  <canvas use:newPaperCanvas resize />
{/if}


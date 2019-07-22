<template>
    <section class="Actualites">
      <h2 class="Title">Notre savoir faire</h2>
      <div class="Actualites__inner">
        <iframe class="Actualites__iframe"
                src="https://www.youtube.com/embed/FmuKypxn7rk"
                width="100%"
                height="420px"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </div>
    </section>
</template>

<script>
export default {
  name: 'actualites',
};
</script>

<style>
  .Actualites {
    margin-top: 80px;
  }

  .Actualites__video {
    padding: 0 4%;
    margin-bottom: 60px;
    border-radius: 4px;
  }

  .Actualites__iframe {
    border-radius: 8px;
  }

  .Actualites__inner {
    margin-bottom: 80px;
    position: relative;
    z-index: 2;
  }

   @media (min-width: 768px) {
     .Actualites {
       margin-top: 0;
     }
   }
</style>

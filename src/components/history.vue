<template>
    <section class="Materiaux">
      <div class="Materiaux__container">
        <div class="Materiaux__left">
          <h2 class="Title Title__white">Nos matériaux</h2>
          <p>ABT menuiserie est soucieuse des questions environnementales et à pour objectif d’économiser le maximum de ressources naturelles et de minimiser l’impact sur les écosystèmes.</p>
          <p>Nous utilisons des produits locaux et garantissons un résultat correspondant à vos attentes.</p>
        </div>
        <div class="Materiaux__right">
          <img class="Materiaux__wood"
               src="@/assets/background__image__mobile.png"
               alt="ABT menuiserie logo"/>
        </div>
      </div>
      <img class="Background"
           src="@/assets/background__mobile.png"
           alt="ABT menuiserie logo"/>
    </section>
</template>


<script>

export default {
  name: 'history',
  components: {},
};
</script>

<style>
  .Title__white {
    color: white;
    padding: 0;
  }

  .Materiaux {
    position: relative;
    color: white;
  }

  .Materiaux__container {
    display: flex;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
  }

  .Materiaux__left {
    padding-top: 40px;
    padding-left: 4%;
  }

  @media (min-width: 768px) {
    .Background,
    .Materiaux__wood {
      display: none;
    }

    .Materiaux__container {
      position: relative
    }

    .Materiaux__left {
      padding-top: 0;
    }

    .Title__white {
      color: var(--color-black-01);
    }
  }
</style>



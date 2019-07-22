<template>
  <section class="Artisants">
      <h2 class="Title">Notre artisan</h2>
      <div class="Artisants__personne">
        <img src="@/assets/thomas.png"
             alt="Thomas"/>
        <div class="Artisants__description">
          <h3 class="Artisants__title">Tom Labrousse</h3>
          <p>Fils et petit fils de menuisier, je fabrique du mobilier en bois et résine dans notre atelier familial.</p>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'artisan',
};
</script>

<style>
  .Artisants {
    margin-top: 80px;
  }

  .Artisants__personne {
    width: 92%;
    margin: 0 4%;
    box-shadow: 0 2px 7px 0 rgba(30, 39, 51, 0.3);
    border-radius: 4%;
    display: flex;
  }

  .Artisants__description {
    padding-right: 10px;
  }

  .Artisants__title {
    margin-top: 30px;
    margin-bottom: 30px;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    .Artisants {
      margin-top: 0;
    }

    .Artisants__personne {
      width: 100%;
      margin: 0;
    }
  }

</style>

<template>
  <header class="Header">
    <div class="Header__content">
      <img class="Header__logo"
           src="@/assets/header__logo.png"
           alt="ABT menuiserie logo"/>
      <h1 class="Header__title">Le sur-mesure en bois <br/>& résine sur Bordeaux</h1>
      <p class="Header__subtitle">À chaque création son histoire</p>
      <p class="Header__callme" >
        <a href="mailto:menuiserie.abt@gmail.com"
           title="mail abt menuiserie">
           menuiserie.abt@gmail.com
        </a>
      </p>
      <p class="Header__instructions">
        Une envie, des projets ?
        <br />Rencontrons nous pour concrétiser vos idées ✨
      </p>
    </div>
    <picture class="Header__picture">
      <source media="(min-width: 768px)" srcset="@/assets/header__desktop.png">
      <img class="Header__background"
         src="@/assets/header__mobile.png"
         alt="ABT menuiserie logo"/>
    </picture>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  methods: {
    callme() {},
  },
};
</script>

<style scoped>
  .Header {
    display: flex;
    align-items: flex-start;
    margin-bottom: 150px;
  }
  .Header__logo {
    display: block;
    max-width: 100%;
    margin-bottom: 20px;
  }

  .Header__picture {
    width: 100%;
  }

  .Header__background {
    display: block;
    width: 100%;
  }

  .Header__content {
    position: absolute;
    left: 4%;
    width: 92%;
    color: var(--color-white);
    padding-top: 70px;
  }

  .Header__title {
    font-weight: bold;
    font-size: 1.125em;
  }

  .Header__subtitle {
    margin-top: 10px;
    font-weight: normal;
  }

  .Header__callme {
    padding: 26px 24px 24px 76px;
    border: 0;
    border-radius: 4px;
    width: 100%;
    font-size: 1em;
    box-shadow: 0 2px 7px 0 rgba(30, 39, 51, 0.3);
    margin-top: 40px;
    color: var(--color-black-03);
    background: url(../assets/phone.svg) white no-repeat scroll 24px 24px;
  }

  .Header__callme a {
    color: var(--color-black-02);
    text-decoration: none;
  }


    .Header__instructions {
    margin-top: 15px;
    font-size: 0.875em;
    color: var(--color-black-02);
  }

  @media (min-width: 500px) {
    .Header__instructions {
      color: white;
    }
  }

  @media (min-width: 768px) {
    .Header__content {
      padding-top: 170px;
    }
    .Header__callme {
      width: 40%;
    }
  }
</style>

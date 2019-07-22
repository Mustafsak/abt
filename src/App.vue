<template>
  <div>
    <Header></Header>
    <Book></Book>
    <Actualites></Actualites>
    <History></History>
    <Artisan></Artisan>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Book from './components/book.vue';
import Footer from './components/footer.vue';
import History from './components/history.vue';
import Artisan from './components/artisan.vue';
import Actualites from './components/actualites.vue';

export default {
  name: 'app',
  components: {
    Header,
    Book,
    Footer,
    History,
    Artisan,
    Actualites,
  },
};
</script>

<style>
  @import '~reset-css/reset.css';
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  html {
    font-family: 'Roboto', sans-serif;
    font-size: 100%;
    --color-white: #FFF;
    --color-black-01: #1E2733;
    --color-black-02: #4B525C;
    --color-black-03: #787D85;
    --color-green-01: #2FB09B;
  }

  * {
    box-sizing: border-box;
  }

  h2 {
    font-size: 1.125em;
    color: var(--color-black-01);
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 10px;
    font-size: 0.875em;
  }

  .Background {
    max-width: 100%;
    height: 400px;
  }

  .Title {
    padding: 0 4%
  }

  .Title__white {
    color: white;
    padding: 0;
  }

  .Actualites {
    margin-top: 80px;
  }

  .Actualites__video {
    padding: 0 4%;
    margin-bottom: 60px;
    border-radius: 4px;
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
</style>

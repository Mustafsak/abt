<template>
  <div>
    <Header></Header>
    <Book></Book>
    <div class="container__responsive">
      <Actualites></Actualites>
      <History></History>
      <Artisan></Artisan>
    </div>
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
    color: #1E2733;
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
    font-weight: 500;
    color: var(--color-black-01);
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 10px;
    font-size: 0.875em;
  }

  .Background {
    width: 100%;
    height: 400px;
  }

  .Title {
    padding: 0 4%
  }

  @media (min-width: 768px) {
    .container__responsive {
       display: flex;
       clear: both;
       padding: 30px 4%;
       justify-content: space-between;
       margin-top: 200px;
     }

     .container__responsive .Title {
       padding: 0;
     }

    .Materiaux {
      display: none;
    }

     .Actualites,
     .Artisants {
       color: var(--color-black-01);
       width: 44%;
     }
   }
</style>

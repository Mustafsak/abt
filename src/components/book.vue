
<template>
    <section class="Book">
      <h2 class="Title">Nos créations</h2>
      <vue-glide :gap="20"
                 :rewind="true"
                 :breakpoints="{
                    768: {
                      perView: 2,
                      peek: { before: 14, after: 14 }
                    },
                    1170: {
                      perView: 4,
                      peek: { before: 34, after: 34 }
                    },
                    1800: {
                      perView: 6,
                      peek: { before: 54, after: 54 }
                    }
                  }"
                  :peek="{ before: 14, after: 14 }"
                  v-if="loaded">
          <vue-glide-slide v-for="image in images"
                           :key="image.id">
            <img :src="image.src"
                 :alt="image.title"/>
          </vue-glide-slide> 
          <template slot="control" style="margin: 40px 14px;">
            <button class="glide__control-button glide__control-button-left"
                    data-glide-dir="<">Précédentes</button>
            <button class="glide__control-button glide__control-button-right"
                    data-glide-dir=">">Suivantes</button>
          </template>
      </vue-glide>
    </section>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js';
import 'vue-glide-js/dist/vue-glide.css';
import Book from '../../api/book';
import Images from '../../public/assets/data/book.json';

export default {
  name: 'book',
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data () {
    return {
      images: [],
      loaded: false,
    }
  },
  methods: {
    manageBook() {
      return new Promise((resolve, reject) => {
        this.images = Images;
        resolve(true)
      });
    }
  },
  mounted() {
    this.manageBook().then(()=> {
      this.loaded = true;
    })
  },
};
</script>

<style scoped>
  .glide__slide img {
    max-width: 100%;
    border-radius: 4px;
  }

  div[data-glide-el="controls"] {
    margin: 40px 4%;
    display: flex;
    justify-content: space-between;
  }

  .glide__control-button {
    display: block;
    border-radius: 4px;
    padding: 15px;
    width: 42%;
    border: 1px solid var(--color-green-01);
    color: var(--color-green-01);
    font-size: 1em;
    font-weight: 500;
    background-color: white;
    margin: 30px 4% 80px;
    float: left;
  }

  .glide__control-button:focus,
  .glide__control-button:hover{
    background-color: var(--color-green-01);
    color: white;
  }

  @media (min-width: 768px) {
    .glide__control-button {
      width: 150px;
      margin: 30px 14px;
    }
    .glide__control-button-left {
      margin-left: 4%
    }
  }
</style>

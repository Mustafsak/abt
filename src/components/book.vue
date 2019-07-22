<template>
    <section class="Book">
      <h2 class="Title">Nos créations</h2>
      <vue-glide :per-view="1.8"
                 :gap="20"
                 :autoplay="false"
                 :rewind="true">
        <vue-glide-slide v-for="image in images" :key="image.id">
          <img :src="`${image.src}`"
               :alt="`${image.title}`"/>
        </vue-glide-slide>
        <!-- <template slot="control">
          <div class="glide__control">
            <button class="glide__control-button"
                    data-glide-dir="<">⬅️</button>
            <button class="glide__control-button"
                    data-glide-dir=">">➡️</button>
          </div>
        </template> -->
      </vue-glide>
    </section>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js';
import 'vue-glide-js/dist/vue-glide.css';
// import Book from '../../Api/book.js';

export default {
  name: 'book',
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
  methods: {
    manageSlide() {},
  },
  mounted() {
    // let book = await Book.getFromFile("./static/book.json")
    // console.log(book)
  },
};
</script>

<style scoped>
  .glide__slide img {
    max-width: 100%;
    border-radius: 4px;
  }

  .glide__slides .glide__slide:first-child {
    margin-left: 14px;
  }

  .glide__control {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .glide__control-button {
    display: block;
    width: 30px;
    height: 30px;
    border: 0;
    border-radius: 100%;
    background: white;
    box-shadow: 0 2px 13px 0 rgba(0,0,0,0.2);
  }
</style>

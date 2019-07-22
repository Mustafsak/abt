<template>
  <div class="Footer">
    <div class="Footer__container">
      <div class="Footer__top">
        <div class="Footer_network">
          <div class="Footer__social"
               @click="redirect('https://www.facebook.com/abtmenuiserieboisresine/')">
            <img  class="Footer__icon"
                  src="@/assets/facebook.png"
                  alt="ABT menuiserie logo"/>
            Facebook
          </div>
          <div class="Footer__social">
            <img class="Footer__icon"
                 src="@/assets/instagrame.png"
                 alt="ABT menuiserie logo"
                 @click="redirect('https://www.instagram.com/abtmenuiserie/')"/>
            Instagram
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {},
  methods: {
    redirect(location) {
      window.open(location, '_blank');
    },
  },
};
</script>

<style scoped>
  .Footer {
    background: var(--color-black-01);
    margin-top: 80px;
    padding: 40px;
  }

  .Footer__container {
    color: white;
    padding: 0 4%;
  }

  .Footer_network {
    justify-content: space-around;
    display: flex;
  }

  .Footer__social {
    display: flex;
    margin-left: 10px
  }

  .Footer__icon {
    display: block;
    margin-right: 8px;
  }
</style>

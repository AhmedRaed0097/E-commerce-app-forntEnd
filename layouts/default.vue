<template>
  <div>
    <div class="nav">
      <nav-bar></nav-bar>
    </div>
    <div class="main">
      <Nuxt />
    </div>

    <footer-app class="footer" />
  </div>
</template>

<script>
import navBar from "~/components/layout/nav.vue";
import footerApp from "~/components/layout/footer.vue";
export default {
  components: {
    navBar,
    footerApp,
  },
};
</script>
<style lang="scss">

</style>

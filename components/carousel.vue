<template>
  <el-carousel
    class="YY"
    :interval="4000"
    height="350px"
    style="margin-top: 30px"
  >
    <el-carousel-item v-for="product in 6" :key="product">
      <div style="height: 330px; width: 320px; margin: 15px auto">
        <span style="margin-left: 115px;">{{product*150}}$</span>
        
        <img width="90%" height="90%" :src="require(`~/assets/men/${product}.png`)" />
      </div>
    </el-carousel-item>
    <!-- <img src="~/assets/clothesImges/men/2.png" alt="xyz" /> -->
  </el-carousel>
</template>
<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    productsImages() {
      return this.$store.state.productImages;
    },
  },
};
</script>
<style lang="scss" scoped>
.XX {
  height: 250px;
  width: 666.5px;
  background-color: #f7f7f7;
  background-position: center;
  background-size: contain;
  /* background-attachment: fixed; */
  background-repeat: no-repeat;
}
// .el-carousel__item h3 {
//   color: #475669;
//   font-size: 14px;
//   text-align: center;
//   opacity: 0.75;
//   line-height: 200px;
//   margin: 0;
// }

.el-carousel {
  background-color: #f7f7f7;
}

.el-carousel__item {
  background-color: transparent;
}

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }

</style>

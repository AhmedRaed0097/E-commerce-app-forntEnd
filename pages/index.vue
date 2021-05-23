<template>
  <div class="container">
    <!-- <div class="header">
      <el-row :gutter="24" style="margin-bottom: 50px">
        <el-col style="" :span="18">
          <div class="carousel">
            <carousel-app />
          </div>
        </el-col>
        <el-col style="" :span="6">
          <div class="side-bar" style="width: 100%">
            <side-bar />
          </div>
        </el-col>
      </el-row>
    </div> -->
    <el-row>
      <el-col>
        <div class="base">
          <div class="content" style="margin-top: 50px">
            <h1 style="color: #fff; line-height: 1.5">
              WELCOME TO <br />Lorem, ipsum dolor.
            </h1>
          </div>
          <div class="btns-cont" style="font-family: Raleway">
            <el-button> SHOP MEN <fa :icon="['fas', 'dollar-sign']" /> </el-button>
            <el-button> SHOP WOMEN </el-button>
          </div>
        </div>
      </el-col>
    </el-row>

    <div>
      <product-card :productsList="trendProducts"></product-card>
    </div>
  </div>
</template>

<script>
import productCard from "~/components/product_card.vue";
import carouselApp from "~/components/HomePage/carousel.vue";
import sideBar from "~/components/HomePage/sideBar.vue";
import offerProducts from "~/components/HomePage/offers.vue";
import dailyDeal from "~/components/HomePage/daily_deal.vue";


export default {
  middleware: "auth",
  components: {
    carouselApp,
    offerProducts,
    dailyDeal,
    sideBar,
    productCard,
  },
  data() {
    return {};
  },
  async fetch({ store, params }) {
    await store.dispatch("products/fetch", params.id);
  },
  computed: {
    productslist() {
      return this.$store.state.products.products_list;
    },

    trendProducts() {
      return this.$store.getters["products/trendProducts"];
    },
  },
  methods: {
    getProducts() {
      return this.$axios
        .$get("api/products")
        .then((result) => {
          console.log("result", result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.$store.dispatch("products/fetch");
  },
};
</script>

<style>
* {
  font-family: "Raleway";
  font-weight: bold;
}
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
.base {
  padding: 100px;
  /* border: 1px solid #000; */
  background-image: url("~/assets/general-imgs/head-img.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
  width: 100%;
}
</style>

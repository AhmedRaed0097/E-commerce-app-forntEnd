<template>
  <div class="container">
    <!-- NEW PRODUCTS -->
    <el-row class="new-product">
      <el-col :span="24">
        <el-card style="margin: 120px 0 120px 0; width: 100%; height: 27.7rem">
          <el-row :gutter="24">
            <el-col :span="12">
              <div class="1" style="height: 100%; margin: 250px auto">
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia
                  neque, voluptatem laboriosam delectus officia.
                </h2>

                <el-button round style="position: relative; left: 120px; top: 40px"
                  >ADD TO CART</el-button
                >
              </div>
            </el-col>
            <el-col :span="12">
              <div class="img" style="margin: 140px 170px; width: 75%">
                <img
                  width="100%"
                  :src="`http://localhost:8000/${productsList[0].product_image}`"
                  alt=""
                />
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

    <!-- DISCOUNT -->

    <!-- <el-row :gutter="24" style="margin-top: 40px; background-color: #f00">
      <el-col :span="12">
        <el-card class="offer-card" style="width: 100%;height: 12rem;">
            <div class="hero">
              <div class="img">
                 <img
                  width="180"
                  :src="`http://localhost:8000/${productsList[0].product_image}`"
                  alt=""
                />
              </div>
              <div class="des" style="width:300px;background-color: #fff;padding: 0 10px;margin: 60px auto;">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, dolorum.</p>
              </div>

            </div>
        </el-card>
      </el-col>
    </el-row> -->

    <el-row :gutter="74">
      <el-col :span="12">
        <el-card style="width: 100%; height: 12rem">
          <el-row :gutter="24">
            <el-col :span="12">
              <div class="1" style="height: 100%; margin: 100px auto">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia
                  neque, voluptatem laboriosam delectus officia.
                </p>
              </div>
            </el-col>
            <el-col :span="12">
              <div
                class="img"
                style="background-color: #f77; margin: 35px 90px; width: 75%; height: 70%"
              >
                <img
                  width="100%"
                  height="205"
                  :src="`http://localhost:8000/${productsList[0].product_image}`"
                  alt=""
                />
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card style="width: 100%; height: 12rem">
          <el-row :gutter="24">
            <el-col :span="12">
              <div class="1" style="height: 100%; margin: 100px auto">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia
                  neque, voluptatem laboriosam delectus officia.
                </p>
              </div>
            </el-col>
            <el-col :span="12">
              <div
                class="img"
                style="background-color: #f77; margin: 35px 90px; width: 75%; height: 70%"
              >
                <img
                  width="100%"
                  height="205"
                  :src="`http://localhost:8000/${productsList[0].product_image}`"
                  alt=""
                />
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="110">
      <el-col :span="6" v-for="(product, index) in productsList" :key="index">
        <el-card class="product-card">
          <div class="img-cont">
            <img
              :src="`http://localhost:8000/${product.product_image}`"
              alt=""
              width="100%"
            />
          </div>

          <div class="product-info">
            <div class="product-name">
              <h4 style="margin: 0">{{ product.product_name }}</h4>
            </div>
            <div class="details">
              <div class="block" style="margin-bottom: 5px">
                <!-- <span class="demonstration">Color for different levels</span> -->
                <el-rate v-model="value2" :colors="colors"> </el-rate>
              </div>
              <span class="price">{{ product.product_price }}$</span>
            </div>

            <div class="btn-cont">
              <el-button size="mini" type="primary" style="float: right"
                >ADD TO CART</el-button
              >
              <el-button size="mini" style="margin: 0" @click="dialogVisible = true"
                >DETAILS</el-button
              >
              <el-dialog top="2vh" :visible.sync="dialogVisible" width="80%">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <div class="img" style="width: 100%">
                      <img
                        width="412"
                        height="412"
                        :src="`http://localhost:8000/${productsList[0].product_image}`"
                        alt=""
                        style="border: 1px solid #dfdfdf"
                      />
                    </div>
                    <div class="another-pro-img">
                      <img
                        width="100"
                        :src="`http://localhost:8000/${product.product_image}`"
                        alt=""
                        class="pro-img"
                      /><img
                        width="100"
                        :src="`http://localhost:8000/${product.product_image}`"
                        alt=""
                        class="pro-img"
                      /><img
                        width="100"
                        :src="`http://localhost:8000/${product.product_image}`"
                        alt=""
                        class="pro-img"
                      /><img
                        width="100"
                        :src="`http://localhost:8000/${product.product_image}`"
                        alt=""
                        class="pro-img"
                      />
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="dialog-content">
                      <h2>{{ product.product_name }}</h2>
                      <p style="width: 350px">
                        Lorem ipsum dolor sit amet,Placeat sint sed quo. accusantium hic,
                        suscipit recusandae?
                      </p>
                      <div class="block">
                        <!-- <span class="demonstration">Color for different levels</span> -->
                        <el-rate v-model="value2" :colors="colors"> </el-rate>
                      </div>
                      <h3 style="text-decoration: line-through">
                        {{ product.product_price }}$
                      </h3>
                      <h3>{{ product.product_price }}$</h3>
                    </div>
                    <div class="sizes">
                      <p>Select Size :</p>
                      <el-button
                        size="mini"
                        style="padding: 5px; background-color: #dfdfdf"
                        >XXXL</el-button
                      >
                      <el-button
                        size="mini"
                        style="padding: 5px; background-color: #dfdfdf"
                        >XxL</el-button
                      >
                      <el-button
                        size="mini"
                        style="padding: 5px; background-color: #dfdfdf"
                        >XL</el-button
                      >
                      <el-button
                        size="mini"
                        style="padding: 5px; background-color: #dfdfdf"
                        >L</el-button
                      >
                      <el-button
                        size="mini"
                        style="padding: 5px; background-color: #dfdfdf"
                        >M</el-button
                      >
                      <el-button
                        size="mini"
                        style="padding: 5px; background-color: #dfdfdf"
                        >S</el-button
                      >
                    </div>
                    <br />
                    <div class="add-to-cart-btn">
                      <el-button style="width: 400px"> ADD TO CART </el-button>
                    </div>
                    <br />
                    <div class="add-to-wish">
                      <i class="el-icon-star-off"></i>
                      <small>ADD TO WISHLIST</small><br><br>
                      <small>ADD PREVIEW</small>
                    </div>
                  </el-col>
                </el-row>
                <!--
                <span slot="footer" class="dialog-footer" style="background-color: #f00;">
                  <el-button @click="dialogVisible = false">Cancel</el-button>
                  <el-button type="primary" @click="dialogVisible = false"
                    >Confirm</el-button
                  >
                </span> -->
              </el-dialog>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  // props:{
  //   	productsList: {
  // 		type: Array,
  // 	},
  // }
  props: ["productsList"],
  data() {
    return {
      dialogVisible: false,
      value2: 4,

      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    };
  },
};
</script>
<style scoped lang="scss">
.el-row {
  margin-left: 0;
  margin-right: 0;
  padding: 0 30px;
  // background-color: #f77;
}
.new-product {
  .el-col {
    // margin-left: 120px;
  }
  // margin-left:240px;
}
.el-card {
  margin: 30px 0;
  width: 220px;
  height: 355px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #ff5;

  .product-info {
    // background-color: #f00;

    height: 50%;
    padding: 10px 8px 10px 8px;
    .details {
      // background-color: #888;
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .img-cont {
    // height: 0%;
    // background-color: #808;
    // margin: 0 auto;
  }
}

.btn-cont {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 5px 0px 0 0;
  // background-color: #f77;
}
.hero {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
.dialog-content {
  position: relative;
  // top: 31px;
}
.another-pro-img {
  width: 300px;
  display: flex;
  .pro-img {
    margin: 0 1px;
    border: 1px solid #dfdfdf;
  }
}
</style>

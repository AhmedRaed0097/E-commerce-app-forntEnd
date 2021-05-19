<template>
  <div class="container" style="margin-left: 120px">
    <el-row :gutter="20">
      <el-col :span="6" v-for="(product,index) in productsList" :key="index">
        <el-card>
          <div class="img-cont">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png"
              alt=""
              width="100%"
            />
          </div>
          <div class="product-info">
          <div class="product-name">
            <h4>{{product.product_name}}</h4>

          </div>
          <div class="details">
            <span class="rate">*****</span>
            <span class="price">{{product.product_price}}</span>

          </div>

          <div class="btn-cont">
              <el-button size="mini" type="primary" style="float: right"
                >BUY</el-button
              >
              <el-button size="mini" style="float: right">DETAILS</el-button>
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
  props:['productsList']
}
</script>
<style scoped lang="scss">
.el-card {
  margin: 50px 0;
  width: 220px;
  height: 420px;
  .product-info{
    margin: -15px 8px 0 8px;

  .details{
    // background-color: #888;
    display: flex;
    justify-content: space-between;
    span{
      // color: red;

      margin-bottom: 10px;
    }
  }
  }
  .img-cont{
    width: 100%;
    // background-color: #808;
    margin: 0 auto;
  }
}

.btn-cont {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  margin: 15px -15px 0 0;

}
</style>

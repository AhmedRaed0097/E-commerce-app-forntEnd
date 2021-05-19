<template>
    <div class="hero" >
        <div v-for="productNo in 2" :key="productNo" class="item">
            
      <img  
        width="100%" height="100%" class="product-img"
        :src="require(`~/assets/menAccessories/new${productNo}.jpg`)"
        :alt="`side product ${productNo}`"
      />
        </div>
    </div>
  
</template>

<style lang="scss" scoped>
.hero{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 350px;
    margin: 28px 0;
    // background-color: #dd0;
    .item{
        width:100%;
        height: 170px;
        background-color: #f7f7f7;
        // border: 1psx solid #000;
        .product-img{
        border-radius: 10px;
            // margin-top: 20px;
        }
    }
}
</style>
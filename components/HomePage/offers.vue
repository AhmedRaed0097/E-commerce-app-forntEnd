<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="8" v-for="offer in 3" :key="offer">
       <el-card>

        <div class="second-offer offer" >
          <div :style="`width: 160px;height: 120px;background-image:url(/_nuxt/assets/menAccessories/glass${offer}.png)`" class="img-cont">
            <!-- <img
              width="100"
              height="100"
              :src="require(`~/assets/menAccessories/glass${offer}.png`)"
            /> -->
          </div>
                <div style="width: 200px;">
            <h3>SunGlass{{ offer }}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
       </el-card>

      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.el-card {
  // background-color: #fff;
  /* background-attachment: fixed; */
  // background-repeat: no-repeat;
}

.second-offer {
  display: flex;
  justify-content: space-between;  // margin: 60px 30px 0 30px;
  div{

  }
}
.img-cont{
  background-size:contain;
  background-repeat: no-repeat;
  background-position:  center;

}
</style>

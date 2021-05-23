<template>
  <div>
    <el-row :gutter="24">
      <div class="deals-cont" style="margin-bottom: 300px">
        <h3 style="border-bottom: 1px solid #d2d2d2">Dialy Deal</h3>

        <el-col class="hero" v-for="deal in 4" :key="deal" :span="6">
          <!--     
    <div class="deal">
      <div class="head">
        <h2>{{deal.header}}</h2>
        <p>{{deal.content}}</p>
      </div>
    </div> -->

          <div class="deal">
            <img
              width="170"
              height="170"
              :src="require(`~/assets/men/jacket${deal}.png`)"
              alt=""
            />
          </div>
          <div
            style="margin: -35px 70px; width: 65px; display: flex; flex-direction: column"
            :class="`price${deal}`"
          >
            <h4>Product{{ deal }}</h4>
            <span style="margin: 0 auto">{{ deal * 100 - 27 }}$</span>
          </div>
        </el-col>
      </div>
    </el-row>

    <el-row>
      <el-col class="hero" v-for="deal in 4" :key="deal" :span="6">
        <!--     
    <div class="deal">
      <div class="head">
        <h2>{{deal.header}}</h2>
        <p>{{deal.content}}</p>
      </div>
    </div> -->

        <div class="deal">
          <img
            width="170"
            height="170"
            :src="require(`~/assets/men/s${deal}.png`)"
            alt=""
          />
        </div>
        <div
          style="margin: -35px 70px; width: 65px; display: flex; flex-direction: column"
          :class="`price${deal}`"
        >
          <h4>Product{{ deal }}</h4>
          <span style="margin: 0 auto">{{ deal * 100 - 27 }}$</span>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" type="flex" justify="space-between" style="margin-top: 150px">
      <el-col :span="12" v-for="deal2 in 2" :key="deal2">
        <div
          class="hero"
          style="display: flex; justify-content: space-around; background-color: #f7f7f7"
        >
          <div style="width: 320px; height: 165px" :class="`img${deal2}`">
            <img
              width="100%"
              height="100%"
              :src="require(`~/assets/menAccessories/new${deal2}.jpg`)"
              alt=""
            />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col :span="24">
        <div class="section" style="height: 250px; margin-bottom: 100px"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dealsList: [
        {
          header: "Header 1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia amet saepe natus suscipit minima blanditiis accusantium numquam! Illum, molestiae.",
        },
        {
          header: "Header 2",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia amet saepe natus suscipit minima blanditiis accusantium numquam! Illum, molestiae.",
        },
        {
          header: "Header 3",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia amet saepe natus suscipit minima blanditiis accusantium numquam! Illum, molestiae.",
        },
        {
          header: "Header 4",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia amet saepe natus suscipit minima blanditiis accusantium numquam! Illum, molestiae.",
        },
        {
          header: "Header 5",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia amet saepe natus suscipit minima blanditiis accusantium numquam! Illum, molestiae.",
        },
        {
          header: "Header 6",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia amet saepe natus suscipit minima blanditiis accusantium numquam! Illum, molestiae.",
        },
        {
          header: "Header 7",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia amet saepe natus suscipit minima blanditiis accusantium numquam! Illum, molestiae.",
        },
        {
          header: "Header 8",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia amet saepe natus suscipit minima blanditiis accusantium numquam! Illum, molestiae.",
        },
        {
          header: "Header 9",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia amet saepe natus suscipit minima blanditiis accusantium numquam! Illum, molestiae.",
        },
        {
          header: "Header 10",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia amet saepe natus suscipit minima blanditiis accusantium numquam! Illum, molestiae.",
        },
        {
          header: "Header 11",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia amet saepe natus suscipit minima blanditiis accusantium numquam! Illum, molestiae.",
        },
        {
          header: "Header 12",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia amet saepe natus suscipit minima blanditiis accusantium numquam! Illum, molestiae.",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.deal {
  margin: 40px 0;
  border: 1px solid #dadada;
  width: 200px;
  height: 170px;

  img {
    margin: 0 15px;
  }
}
.deals-cont {
  margin: 80px 30px;
  // margin-top: 80px;
}
.hero {
  // .deal{
  //   border-left: 1px solid lightgray;
  //   margin: 0 20px 50px 0;
  //   padding: 20px;
  // }
}
</style>

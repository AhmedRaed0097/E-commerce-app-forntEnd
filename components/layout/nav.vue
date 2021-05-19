<template>
  <div class="nav">
    <el-menu class="el-menu-demo" mode="horizontal" active-text-color="#f00">
      <el-menu-item index="1" class="logo" style="font-size: 20px; color: #f00"
        ><span style="position: relative; bottom: 4px; color: rgb(125, 255, 144)"
          >MYSTORE</span
        ></el-menu-item
      >
      <el-menu-item index="2">
        <a href="https://www.ele.me" style="text-decoration: none">MEN</a>
      </el-menu-item>
      <el-menu-item index="3">
        <a href="https://www.ele.me" target="_blank" style="text-decoration: none"
          >WOMEN</a
        >
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">KIDS</template>
        <el-menu-item index="2-1">BOYS</el-menu-item>
        <el-menu-item index="2-2">GIRLS</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">
        <a href="https://www.ele.me" target="_blank" style="text-decoration: none"
          >ACCESSORIES</a
        >
      </el-menu-item>
      <el-menu-item index="6">
        <a href="https://www.ele.me" target="_blank" style="text-decoration: none"
          >BRANDS</a
        >
      </el-menu-item>

      <el-menu-item v-if="$auth.loggedIn" class="registeration" index="9">
        <a @click="$auth.logout()">SIGN OUT</a>
      </el-menu-item>
      <div v-else style="display: inline-flex; float: right">
        <el-menu-item index="7">
          <nuxt-link to="auth/signup">SIGN UP</nuxt-link>
        </el-menu-item>
        <el-menu-item index="8">
          <nuxt-link to="auth/login">SIGN IN</nuxt-link>
        </el-menu-item>
      </div>

      <el-menu-item index="10" class="registeration">
        <el-badge :value="0" class="item" style="height: 34px">
          <el-button type="text" size="small" style="">
            <i
              style="font-size: 25px; margin-bottom: 50px"
              class="el-icon-shopping-cart-2"
            ></i>
          </el-button>
        </el-badge>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  watch: {
    "$auth.loggedIn": {
      handler() {
        if (this.$auth.loggedIn ==false) {
          window.location.reload();

        }
      },
    },
  },
  methods: {
    // async logout() {
    //   // await this.$ls.clear();
    //   await this.$auth.logout();
    //   await this.$axios.setHeader("Authorization", null);

    //   // reload the page
    //   if (process.browser) {
    //     window.location.reload();
    //   }
    // },

    async logout() {
      await this.$auth.logout();
      this.$axios.setHeader("Authorization", null);
    },
  },
};
</script>

<style lang="scss">
.el-menu--horizontal > .el-menu-item.registeration {
  float: right;
}

.el-button--small {
  margin: 1px 15px;
}

.nav {
  padding: 0;
  margin: 0;
}
</style>

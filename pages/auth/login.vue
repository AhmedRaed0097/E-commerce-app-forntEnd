<template>
  <div>
    <el-card shadow="always">
      <h2 class="signup" style="text-align: center">SIGNIN</h2>
      <div class="form-container">
        <el-form
          :model="form"
          status-icon
          :rules="rules"
          ref="form"
          label-width="120px"
          class="demo-form"
        >
          <el-form-item label="Email" prop="email">
            <el-input type="email" v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input
              type="password"
              v-model="form.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="Login()">Submit</el-button>
            <!-- <el-button @click="resetForm('form')">Reset</el-button> -->
            <el-button @click="logtoken()">Reset</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "a@a.com",
        password: "12345",
      },

      rules: {
        email: [
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  methods: {
    async Login() {
      console.log("enterd!!!!!!!!!!");
      await this.$auth
        .loginWith("local", {
          data: this.form,
        })
        .then(() => {
          this.$router.push("/");
          console.log("res", res);
          console.log("this.$auth =>", this.$auth);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    logtoken(){
      console.log(this.$store.state.auth.url);
    }
  },
};
</script>
<style lang="scss" scoped>
.el-card {
  width: 500px;
  margin: 10px auto;
  background-color: #7dff90;

  .form-container {
    width: 450px;
    margin: 0 auto;
  }
}
</style>

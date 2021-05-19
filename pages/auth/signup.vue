<template>
  <div>
    <el-card shadow="always">
      <h2 class="signup" style="text-align: center">SIGNUP</h2>
      <div class="form-container">
        <el-form
          :model="form"
          status-icon
          :rules="rules"
          ref="form"
          label-width="120px"
          class="demo-form"
        >
          <el-form-item label="Username">
            <el-input type="text" v-model="form.username"></el-input>
          </el-form-item>
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
          <el-form-item label="Confirm" prop="password_confirmation">
            <el-input
              type="password"
              v-model="form.password_confirmation"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="Submitf()">Submit</el-button>
            <el-button @click="resetForm('form')">Reset</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.form.password_confirmation !== "") {
          this.$refs.form.validateField("password_confirmation");
        } else if (value.length < 4) {
          callback(new Error("Password must be greater than 4 character"));
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.form.password) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        username: "",
        password: "",
        password_confirmation: "",
        email: "",
      },

      rules: {
      email: [
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"],
          },
        ],
        password: [{ validator: validatePass, trigger: ["blur", "change"] }],

        password_confirmation: [
          { validator: validatePass2, trigger: ["blur", "change"] },
        ],
      },
    };
  },
  methods: {
    async Submitf() {
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {

      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
       var form_data = new FormData();
          for (var key in this.form) {
            form_data.append(key, this.form[key]);

          }
          try{
             let errors = null
           await this.$axios.$get("sanctum/csrf-cookie")
            await this.$axios
                .$post("/register",form_data)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  if (err.response.status =422) {
                    errors = err.response.data.errors
                  }
                  console.log(err);
                });
                this.errors=errors;
          }
          catch(error){

          }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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

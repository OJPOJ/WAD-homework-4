<template>
  <div>
    <form @submit.prevent="validateRegistration">
      <h2>Create an account</h2>
      <label for="email">Email</label>
      <input type="email" required v-model="email" placeholder="Email" />
      <label for="password">Password</label>
      <input type="password" required v-model="password" placeholder="Password" />
      <div v-if="validatePassword" class="error">{{ validatePassword }}</div>
      <div class="submit">
        <button>Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterView",

  data() {
    return {
      email: "",
      password: "",
      validatePassword: "",
    };
  },
  methods: {
    validateRegistration() {
      console.log("signup is submitted");
      this.validatePassword = "";

      if (this.password.length < 8 || this.password.length > 15) {
        this.validatePassword = "Password must be between 8-15 characters.";
      } else if (!/^[A-Z]/.test(this.password)) {
        this.validatePassword = "Password must start with an uppercase letter.";
      } else if ((this.password.match(/[a-z]/g) || []).length < 2) {
        this.validatePassword =
            "Password must contain at least 2 lowercase letters.";
      } else if (!/\d+/.test(this.password)) {
        this.validatePassword = "Password must contain at least 1 digit.";
      } else if (!/[A-Z]/.test(this.password)) {
        this.validatePassword =
            "Password must contain at least 1 uppercase letter.";
      } else if (!/_/.test(this.password)) {
        this.validatePassword = "Password must contain at least 1 underscore.";
      } else {
        console.log("Password is valid");
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
form {
  max-width: 320px;
  margin: 30px auto;
  background: #eadfc8;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
input {
  margin-top: 5px;
  border: none;
  margin-bottom: 5px;
  display:inline-block;
  vertical-align:middle;
  margin-left:20px;
  padding: 10px 6px;
  border-radius: 10px;
}
label {
  display: inline-block;
  float: left;
  padding-top: 10px;
  text-align: right;
  width: 80px;
  margin-right: 20px;
}
h2,
.submit {
  text-align: center;
}

button {
  background: #6b84e5;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: #ffffff;
  border-radius: 20px;
  cursor: pointer;
}

.error {
  color: #ff0000;
  margin-top: 10px;
}
</style>

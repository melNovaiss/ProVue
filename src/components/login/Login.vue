<template>
  <div class="bg-gradient-big">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <div class="row shadow-lg rounded">
            <div class="col-md-6 text-center pt-5 pl-4 bg-big">
              <img src="../../assets/rc20.jpg" alt="logo" style="width: 20em" />
              <div class="my-5 text-white">
                <h4><strong>MERCADINHO O FABIO</strong></h4>
                <h5>
                  <em><span>OBRIGADO, VOLTE SEMPRE.</span></em>
                </h5>
                <i class="bi bi-shop-window"></i>
              </div>
            </div>
            <div class="col-md-6 pt-5 bg-white text-center">
              <h4 class="text-gray-900 mb-4">Bem Vindo!</h4>
              <form
                class="mx-5"
                @submit.prevent="login"
                :class="{
                  'was-validated': formSubmitted && (id === '' || password === ''),
                }"
                novalidate
              >
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control rounded-pill"
                    id="id"
                    v-model="id"
                    placeholder="Usuário"
                    required="required"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control rounded-pill"
                    id="password"
                    v-model="password"
                    placeholder="Senha"
                    required="required"
                  />
                </div>

                <div class="pb-3 text-danger" v-show="loginError">
                  <i class="bi bi-x-circle"></i> Email ou senha incorretos.
                </div>

                <div class="d-grid gap-2">
                  <button class="btn bg-big text-white rounded-pill" type="submit">
                    Acessar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "loginForm",
  data() {
    return {
      id: "",
      password: "",
      formSubmitted: false,
      loginError: false,
    };
  },
  methods: {
    async login() {
      this.formSubmitted = true;

      if (this.id === "" || this.password === "") {
        return;
      }

      try {
        const response = await axios.get(`http://localhost:3000/users/${this.id}`);
        const userData = response.data;

        if (userData && userData.password === this.password) {
          localStorage.setItem("user", userData.id);
          localStorage.setItem("token", "ok");
          this.$router.push("/");
        } else {
          console.log("id ou senha incorretos");
          this.showLoginError();
        }
      } catch (error) {
        console.error(error);
        this.showLoginError();
      }
    },

    showLoginError() {
      this.loginError = true;
      this.password = "";
      setTimeout(() => {
        this.loginError = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 47rem;
}

/* .bg-gradient-big {
    background-color: #f8f9fc;
    background-image: linear-gradient(180deg,#f8f9fc 10%,#00848338 100%);
} */

.form-control {
  font-size: 0.8rem;
  border-radius: 10rem;
  padding: 0.95rem 1rem;
}

.btn {
  font-size: 0.8rem;
  border-radius: 10rem;
  padding: 0.75rem 1rem;
}

.bg-big {
  background-color: #008483;
}

.bi-shop-window {
  font-size: 4em;
}
</style>

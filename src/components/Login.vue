<template>
  <div class="bg-gradient-big">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <div class="row shadow-lg rounded">
            <div class="col-md-6 text-center pt-5 pl-4 bg-big">
              <img src="../assets/rc20.jpg" alt="logo" style="width: 20em" />
              <div class="my-5 text-white">
                <h4><strong>MERCADINHO O FABIO</strong></h4>
                <h5>
                  <em><span>OBRIGADO, VOLTE SEMPRE .</span></em>
                </h5>
                <i class="bi bi-shop-window"></i>
              </div>
            </div>
            <div class="col-md-6 pt-5 bg-white text-center">
              <h4 class="text-gray-900 mb-4">Bem Vindo!</h4>
              <form class="mx-5">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control rounded-pill"
                    id="exampleInputEmail1"
                    placeholder="Usuário"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control rounded-pill"
                    id="exampleInputEmail1"
                    placeholder="Senha"
                  />
                </div>

                <div class="d-grid gap-2">
                  <router-link class="btn bg-big text-white rounded-pill" type="button" to="/">
                    Acessar
                  </router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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

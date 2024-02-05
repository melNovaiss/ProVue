<template>
  <form class="d-flex mx-5 shadow-sm" role="search" @submit="realizarBusca">
    <div class="input-group mb-3">
      <input
        v-model="termoBusca"
        type="text"
        class="form-control"
        placeholder="Código ou Nome"
      />
      <button class="btn btn-outline-primary" type="submit">
        <i class="bi bi-search"></i>
      </button>
      <button class="btn btn-outline-success" type="button" @click="limparForm">
        Incluir
      </button>
    </div>
  </form>
  <div class="shadow-sm">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Cliente</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in clientes" :key="c.id">
          <td>
            <div class="container">
              <div class="row">
                <div class="col-12 text-muted">
                  {{ c.nome }}
                </div>
              </div>
              <div class="row">
                <div class="col-4 text-black-50 fs-7">
                  {{ c.id }}
                </div>
                <div class="col-8 text-black-50 fs-7">
                  {{ c.dtCad }}
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class="d-flex justify-content-end">
              <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" class="btn btn-sm btn-warning text-white">
                  <i class="bi bi-pencil-square"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-danger"
                  @click="deleteCli(c.id)"
                >
                  <i class="bi bi-trash-fill"></i>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CliList",
  data() {
    return {
      clientes: [],
      termoBusca: "",
    };
  },
  methods: {
    async getClientes(termoBusca = "") {
      const url = termoBusca
        ? `http://localhost:3000/clientes?q=${termoBusca}`
        : "http://localhost:3000/clientes";

      try {
        const response = await axios.get(url);
        this.clientes = response.data;
      } catch (error) {
        console.error("Erro ao obter clientes:", error);
      }
    },

    async deleteCli(id) {
      try {
        await axios.delete(`http://localhost:3000/clientes/${id}`);
        this.getClientes();
      } catch (error) {
        console.error("Erro ao excluir cliente:", error);
      }
    },

    async realizarBusca(e) {
      e.preventDefault();
      await this.getClientes(this.termoBusca);
    },

    limparFormulario() {
      this.termoBusca = "";
      this.clientes = [];
    },
  },

  mounted() {
    this.getClientes();
  },
};
</script>

<style scoped>
.fs-7 {
  font-size: 0.9rem !important;
}
</style>

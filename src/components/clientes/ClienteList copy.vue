<template>
  <form class="shadow-sm mb-3 mx-5" role="search" @submit="realizarBusca">
    <div class="input-group input-group-sm">
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
  <div class="row">
    <div class="col-md-7">
      <p class="text-body-tertiary pt-1 mb-0">
        <i class="bi bi-list-ol"></i> {{ totalClientes }} registros
      </p>
    </div>
    <div class="col-md-5">
      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @page-changed="pageChange"
      />
    </div>
  </div>

  <div class="shadow-sm tb_height" v-if="totalClientes > 0">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Cliente</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in cliList" :key="c.id">
          <td>
            <div class="container">
              <div class="row">
                <div class="col-12 text-muted fs-7">
                  {{ c.nome }}
                </div>
              </div>
              <div class="row">
                <div class="col-4 text-black-50 fs-8">
                  {{ c.id }}
                </div>
                <div class="col-8 text-black-50 fs-8">
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
                <button type="button" class="btn btn-sm btn-info text-white">
                  <i class="bi bi-key-fill"></i>
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

  <div class="text-center" v-else>
    <span><i class="bi bi-x-circle text-danger"></i> Não há clientes cadastrados.</span>
  </div>
</template>

<script>
import axios from "axios";
import Pagination from "../Pagination.vue";
import CliTable from "../clientes/ClientesTable.vue";

export default {
  components: { Pagination, CliTable },
  name: "CliList",
  data() {
    return {
      cliList: [],
      currentPage: 1,
      pageSize: 7,
      totalClientes: 0,
      clientes: [],
      termoBusca: "",
    };
  },
  methods: {
    // Função para atualizar a lista de clientes exibidos com base na página atual
    updateCli() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = Math.min(startIndex + this.pageSize, this.totalClientes);
      this.cliList = this.clientes.slice(startIndex, endIndex);
    },
    // Função para a alteração de página
    pageChange(page) {
      this.currentPage = page;
      this.updateCli();
    },
    async getClientes(termoBusca = "") {
      const url = termoBusca
        ? `http://localhost:3000/clientes?q=${termoBusca}`
        : "http://localhost:3000/clientes";

      try {
        const res = await axios.get(url);
        this.clientes = res.data;
        this.totalClientes = this.clientes.length;
        this.totalPages = Math.ceil(this.totalClientes / this.pageSize);
        this.updateCli();
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

    // limparFormulario() {
    //   this.termoBusca = "";
    //   this.clientes = [];
    // },
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
.fs-8 {
  font-size: 0.8rem !important;
}

.form-control {
  background-color: #f6f9ff;
}

/* .tb_height {
  height: calc(100vh - 181px);
  overflow-y: auto;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background-color: #88888820;
} */
</style>

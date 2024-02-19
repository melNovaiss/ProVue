<template>
  <form
    class="form"
    method="POST"
    @submit.prevent="createCli"
    :class="{ 'was-validated': formSubmitted && (cpf === '' || nome === '') }"
    novalidate
  >
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="detalhes-tab"
          data-bs-toggle="tab"
          data-bs-target="#detalhes-tab-pane"
          type="button"
          role="tab"
          aria-controls="detalhes-tab-pane"
          aria-selected="true"
        >
          Detalhes
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="end-tab"
          data-bs-toggle="tab"
          data-bs-target="#end-tab-pane"
          type="button"
          role="tab"
          aria-controls="end-tab-pane"
          aria-selected="false"
        >
          Endereço
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="cont-tab"
          data-bs-toggle="tab"
          data-bs-target="#cont-tab-pane"
          type="button"
          role="tab"
          aria-controls="cont-tab-pane"
          aria-selected="false"
        >
          Contato
        </button>
      </li>
    </ul>
    <div class="tab-content py-3" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="detalhes-tab-pane"
        role="tabpanel"
        aria-labelledby="detalhes-tab"
        tabindex="0"
      >
        <div class="row">
          <div class="col-2">
            <div class="mb-3">
              <label class="form-label">Código</label>
              <input type="text" class="form-control" disabled />
            </div>
          </div>
          <div class="col-4">
            <label class="form-label">CPF/CNPJ *</label>
            <div class="input-group mb-3">
              <span class="input-group-text shadow-sm">
                <i
                  :class="cpf.length <= 14 ? 'bi bi-person-fill' : 'bi bi-building-fill'"
                ></i>
              </span>
              <input
                type="text"
                class="form-control"
                id="cpf"
                v-model="cpf"
                @input="formatarCPF"
                required="required"
                maxlength="18"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="mb-3">
              <label class="form-label">Nome *</label>
              <input
                type="text"
                class="form-control"
                id="nome"
                v-model="nome"
                required="required"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-3 offset-9">
            <div class="mb-3">
              <label class="form-label">Data Cadastro</label>
              <input
                type="text"
                class="form-control"
                id="dtCad"
                v-model="dtCad"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="end-tab-pane"
        role="tabpanel"
        aria-labelledby="end-tab"
        tabindex="0"
      >
        <Endereco :endereco="endereco" />
      </div>
      <div
        class="tab-pane fade"
        id="cont-tab-pane"
        role="tabpanel"
        aria-labelledby="cont-tab"
        tabindex="0"
      >
        <Contato :contato="contato" />
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-success">Salvar</button>
    </div>
  </form>
</template>

<script>
import { formatarCPF } from "../../assets/js/mask";

import Endereco from "@/components/Endereco.vue";
import Contato from "@/components/Contato.vue";
import axios from "axios";

export default {
  name: "CliForm",
  components: {
    Endereco,
    Contato,
  },
  data() {
    return {
      cpf: "",
      nome: "",
      endereco: {
        rua: "",
        bairro: "",
        cidade: "",
        num: "",
        cod: "",
        uf: "",
        compl: "",
      },
      contato: { tel: "", cel: "", email: "" },
      formSubmitted: false,
    };
  },
  methods: {
    formatarCPF() {
      this.cpf = formatarCPF(this.cpf);
    },
    formatarData(data) {
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const dataFormatada = new Date(data).toLocaleString("pt-BR", options);
      return dataFormatada;
    },
    async createCli() {
      this.formSubmitted = true;

      if (this.cpf === "" || this.nome === "") {
        return;
      }

      const dataAtual = new Date().toISOString();

      const data = {
        cpf: this.cpf,
        nome: this.nome,
        dtCad: this.formatarData(dataAtual),
        endereco: this.endereco,
        contato: this.contato,
      };

      try {
        await axios.post("http://localhost:3000/clientes", data);
        window.location.reload();
      } catch (error) {
        console.error("Erro ao criar cliente:", error);
      }
    },
  },
};
</script>

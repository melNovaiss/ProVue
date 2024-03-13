<template>
  <div class="row">
    <div class="col-3">
      <div class="mb-3">
        <label class="form-label">Telefone</label>
        <input
          type="text"
          class="form-control"
          id="tel"
          maxlength="10"
          v-model="contato.tel"
          @input="formatarTel"
        />
      </div>
    </div>
    <div class="col-3">
      <div class="mb-3">
        <label class="form-label">Celular *</label>
        <input
          type="text"
          class="form-control"
          id="cel"
          maxlength="11"
          required="required"
          v-model="contato.cel"
          @input="formatarCel"
        />
      </div>
    </div>
    <div class="col-6">
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input
          type="text"
          class="form-control"
          id="email"
          required="required"
          v-model="contato.email"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { formatarCel, formatarTel } from "../assets/js/mask.js";

export default {
  name: "Contato",
  props: {
    contato: Object,
  },
  methods: {
    formatarCel() {
      this.contato.cel = formatarCel(this.contato.cel);
    },
    formatarTel() {
      this.contato.tel = formatarTel(this.contato.tel);
    },
  },
};
</script>

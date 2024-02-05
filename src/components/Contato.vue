<template>
  <div class="row">
    <div class="col-3">
      <div class="mb-3">
        <label class="form-label">Telefone</label>
        <input type="text" class="form-control" id="tel" v-model="contato.tel"/>
      </div>
    </div>
    <div class="col-3">
      <div class="mb-3">
        <label class="form-label">Celular *</label>
        <input type="text" class="form-control" id="cel" v-model="contato.cel"/>
      </div>
    </div>
    <div class="col-6">
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="text" class="form-control" id="email" v-model="contato.email"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Endereco",
  props: {
    contato: Object,
  },
};
</script>

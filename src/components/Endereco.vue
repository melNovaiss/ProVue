<template>
  <div class="row">
    <div class="col-2">
      <div class="mb-3">
        <label class="form-label">CEP *</label>
        <input type="text" class="form-control" id="cep"/>
      </div>
    </div>
    <div class="col-8">
      <div class="mb-3">
        <label class="form-label">Endereço *</label>
        <input type="text" class="form-control" id="rua" v-model="endereco.rua" />
      </div>
    </div>
    <div class="col-2">
      <div class="mb-3">
        <label class="form-label">N *</label>
        <input type="text" class="form-control" id="num" v-model="endereco.num" />
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-3">
      <div class="mb-3">
        <label class="form-label">Bairro *</label>
        <input type="text" class="form-control" id="bairro" v-model="endereco.bairro" />
      </div>
    </div>
    <div class="col-2">
      <div class="mb-3">
        <label class="form-label">Cidade *</label>
        <input type="text" class="form-control" id="cidade" v-model="endereco.cidade" />
      </div>
    </div>
    <div class="col-2">
      <div class="mb-3">
        <label class="form-label">Cód. Munic *</label>
        <input type="text" class="form-control" id="cod" v-model="endereco.cod" />
      </div>
    </div>
    <div class="col-1">
      <div class="mb-3">
        <label class="form-label">UF *</label>
        <input type="text" class="form-control" id="uf" v-model="endereco.uf" />
      </div>
    </div>
    <div class="col-4">
      <div class="mb-3">
        <label class="form-label">Complemento</label>
        <input type="text" class="form-control" id="compl" v-model="endereco.compl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Endereco",
  props: {
    endereco: Object,
  },
};
</script>


<template>
  <div class="container-fluid">
  <div class="row py-4">
    <div class="col-md-4">
      <CliList />
    </div>
    <div class="col-md-8">
      <div class="card border-light shadow-sm">
        <div class="card-body">
          <CliForm />
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import CliForm from "@/components/clientes/ClienteForm.vue";
import CliList from "@/components/clientes/ClienteList.vue";

export default {
  name: "clientes",
  components: {
    CliForm,
    CliList,
  },
};
</script>

<style scoped>
.form-control {
  background-color: #f6f9ff;
}
</style>

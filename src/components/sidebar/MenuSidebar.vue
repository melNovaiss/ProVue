<template>
  <hr class="my-0" />
  <ul class="navbar-nav">
    <li class="nav-item">
      <router-link class="nav-link px-4 textSid" to="/">
        <i class="bi bi-house"></i>
        Inicio</router-link
      >
    </li>
    <li class="nav-item">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item border-0">
          <button
            class="accordion-button collapsed textSid textSid"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            <i class="bi bi-list-ul"></i> Cadastros
          </button>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse text-white"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body m-3 px-2 rounded">
              <ul class="navbar-nav" style="height: auto">
                <li class="nav-item px-2">
                  <router-link class="nav-link textSid" to="/clientes"> Clientes</router-link>
                </li>
                <li class="nav-item px-2">
                  <router-link class="nav-link textSid" to="/funcionarios"> Funcionários</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
  <hr class="my-0" />
</template>

<script>
export default {
  name: "MenuSidebar",
};
</script>

<style scoped>
.card-body {
  background-color: rgba(0, 0, 0, 0.175);
}

hr {
  /* border-top: 1px solid; */
  margin: 1.3rem 1.3rem;
}

.textSid {
  font-size: 1rem;
}

a,
.accordion-button {
  color: rgba(255, 255, 255, 0.808);
}

.bi {
  padding-right: 0.8rem;
}

.nav-item:hover,
.accordion-button:hover {
  background-color: rgba(201, 201, 201, 0.192);
  cursor: pointer;
}

.nav-link:hover {
  color: white;
  font-weight: 600;
}

.accordion-button:hover {
  color: white;
  font-weight: 600;
}

.accordion,
.accordion-item,
.collapsed {
  background-color: #00b1b0;
  --bs-accordion-border-color: none;
}

.accordion-button {
  background-color: #00b1b0;
  color: rgba(255, 255, 255, 0.808);
}

.accordion-button::after {
  content: "\F282";
  font-family: "bootstrap-icons";
  background-image: none;
}

.accordion-button:focus {
  box-shadow: 0 0 0 0;
}

.accordion-body {
  background-color: rgba(0, 0, 0, 0.175);
}
</style>

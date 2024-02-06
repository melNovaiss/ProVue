<template>
  <hr />
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link px-4" href="/">
        <i class="bi bi-house"></i>
        Inicio</a
      >
    </li>
    <hr />
    <div>
      <!-- <span>Menu</span> -->
      <li class="nav-item">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item border-0">
            <button
              class="accordion-button collapsed"
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
              <div class="accordion-body">
                <ul class="navbar-nav" style="height: auto">
                  <li class="nav-item">
                    <a class="nav-link px-4" href="/clientes"> Clientes</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-4" href="/funcionarios"> Funcionarios</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  </ul>
  <hr />
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
  margin: 0.8rem 0.8rem;
}

a,
.accordion-button {
  color: rgba(255, 255, 255, 0.808);
}

.bi {
  /* padding-left: 2px; */
  padding-right: 0.8rem;
}

.nav-item:hover,
.accordion-button:hover {
  background-color: rgba(201, 201, 201, 0.192);
  cursor: pointer;
}

.nav-link:hover {
  color: white;
}

.accordion-button:hover{
  color: white;
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
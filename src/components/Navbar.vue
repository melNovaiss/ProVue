<template>
  <nav class="navbar bg-body-tertiary shadow">
    <div class="container-fluid justify-content-between">
      <div class="d-grid px-2">
        <span>TESTE</span>
        <span>Data Expiração: <span class="badge text-bg-big">30/10/2024</span></span>
      </div>
      <div class="d-flex align-items-center aaa">
        <span>SUPORTE BIG</span>
        <div class="dropdown">
          <button
            class="btn"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="../assets/icon.svg"
              class="rounded-circle"
              height="32"
              width="32"
              alt="Dropdown Toggle"
            />
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <router-link class="dropdown-item" to="/login" @click="removeUser">
                <i class="bi bi-box-arrow-in-right"></i> Sair
              </router-link>
            </li>
          </ul>
        </div>

        <button
          class="navbar-toggler border-0 d-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list fs-2"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    removeUser() {
      localStorage.clear();
    },
  },
};
</script>

<style scoped>
.bi {
  padding-right: 0.8rem;
}

span {
  font-size: 0.85rem;
  opacity: 1;
  color: rgba(33, 37, 41, 0.75);
}

.text-bg-big {
  background-color: #00b1b0;
  color: white;
  font-size: 0.6rem;
}

.dropdown-menu {
  left: -100px;
}
.btn {
  border: none;
}

/* .btn:hover {
  background-color: rgba(201, 201, 201, 0.192);
  cursor: pointer;
} */

/* .dropdown-menu > li:active {
  background-color: #00b1b0;
} */
</style>

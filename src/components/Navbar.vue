<template>
  <nav class="navbar bg-body-tertiary shadow">
    <div class="container-fluid justify-content-end">
      <div class="dropdown">
        <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
            <router-link class="dropdown-item" to="/login">
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
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.bi {
  padding-right: 0.8rem;
}
</style>

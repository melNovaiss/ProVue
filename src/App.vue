<template>
  <div class="row">
    <div class="col-2 px-0">
      <div class="sidebar px-4" id="navbarToggleExternalContent">
        <div class="d-flex justify-content-center">
          <img class="my-3" width="40" height="40" src="../src/assets/logo.png" alt="logo" />
        </div>
        <div>
          <MenuSidebar />
        </div>
      </div>
    </div>
    <div class="col-10 px-0">
      <div class="content">
        <nav class="navbar bg-body-tertiary shadow">
          <div class="container-fluid">
            <button
              class="navbar-toggler border-0"
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
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import MenuSidebar from "@/components/MenuSidebar.vue";

export default {
  name: "app",
  components: {
    MenuSidebar,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Arial", sans-serif;
}

.sidebar {
  height: 100vh;
  background-color: #303c54;
  color: white;
  /* width: 230px; */
  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
}

.content {
  /* width: calc(100% - 230px); */
  /* height: 100vh; */
  /* margin-left: 230px; */
  overflow-x: hidden;
}

input {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
</style>

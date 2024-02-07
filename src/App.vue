<template>
  <div v-if="$route.name !== 'login'">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 px-0">
          <div class="sidebar">
            <Sidebar />
          </div>
        </div>
        <div class="col-md-10 px-0">
          <div class="content">
            <Navbar />
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <router-view />
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "app",
  components: {
    Sidebar,
    Navbar,
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
  background-color: #00b1b0;
  color: white;
}

.dropdown-menu {
  top: 120% !important;
  left: -127px !important;
}

input {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
</style>

<template>
  <div class="d-flex justify-content-center py-4">
    <span>BIG</span>
  </div>
  <div>
    <MenuSidebar />
  </div>
</template>

<script>
import MenuSidebar from "@/components/sidebar/MenuSidebar.vue";
export default {
  name: "Sidebar",
  components: {
    MenuSidebar,
  },
};
</script>

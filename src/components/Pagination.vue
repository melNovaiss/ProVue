<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination pagination-sm justify-content-end">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" aria-label="First" @click="firtsPage">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{ active: pageNumber === currentPage }"
      >
        <a class="page-link" @click="goPage(pageNumber)">{{ pageNumber }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" aria-label="Last" @click="lastPage">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    goPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit("page-changed", page);
      }
    },
    firtsPage() {
      this.goPage(1);
    },
    lastPage() {
      this.goPage(this.totalPages);
    },
  },
};
</script>

<style scoped>
.disabled > .page-link {
  background-color: #e9ecef;
}
.page-link {
  background-color: #f6f9ff;
  color: rgba(33, 37, 41, 0.75);
}
.active > .page-link {
  background-color: #00b1b0;
  color: white;
  border-color: #00b1b0;
}
</style>

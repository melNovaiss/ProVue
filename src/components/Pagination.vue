<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination pagination-sm justify-content-end">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" aria-label="First" @click="firstPage">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-if="currentPage > 2" class="page-item disabled">
        <span class="page-link">..</span>
      </li>
      <li v-for="pageNumber in getVisiblePages" :key="pageNumber" :class="{ active: pageNumber === currentPage }">
        <a class="page-link" @click="goPage(pageNumber)">{{ pageNumber }}</a>
      </li>
      <li v-if="totalPages - currentPage > 1" class="page-item disabled">
        <span class="page-link">..</span>
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
  computed: {
    getVisiblePages() {
      const visiblePages = [];
      const startPage = Math.max(1, this.currentPage - 1);
      const endPage = Math.min(this.totalPages, this.currentPage + 1);
      for (let i = startPage; i <= endPage; i++) {
        visiblePages.push(i);
      }
      return visiblePages;
    }
  },
  methods: {
    goPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit("page-changed", page);
      }
    },
    firstPage() {
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

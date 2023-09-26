<template>
  <main class="container-fluid p-5 border border-danger">
    <div>
      <h1>{{ category.title }}</h1>
    </div>
  </main>
</template>

<script lang="ts">
import { useGeneralStore } from "@/stores/general";

export default {
  setup() {
    const generalStore = useGeneralStore();

    return {
      category: generalStore.currentCategory,
    };
  },
};
</script>

<template>
  <main class="container-fluid overflow-x-hidden">
    <section>
      <DayPromotion />
    </section>
    <section class="mb-5">
      <div class="my-5 fs-3">Select a category:</div>
      <CategoriesList />
    </section>
  </main>
</template>

<script lang="ts">
import DayPromotion from "@/components/homepage/DayPromotion.vue";
import CategoriesList from "@/components/homepage/CategoriesList.vue";

export default {
  data() {
    return {};
  },
  components: {
    DayPromotion,
    CategoriesList,
  },
};
</script>

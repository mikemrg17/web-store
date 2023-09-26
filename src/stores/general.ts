import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Category } from "@/types/Category";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    currentCategory: {
      name: "",
      title: "",
      image: "",
    },
  }),
  actions: {
    setCurrentCategory(category: Category) {
      this.currentCategory = category;
    },
  },
});

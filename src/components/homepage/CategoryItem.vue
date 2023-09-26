<template>
  <div
    class="card position-relative overflow-hidden z-0"
    id="category-card"
    @click="openCategory"
  >
    <img
      :src="category.image"
      alt="Category cover"
      height="400"
      width="400"
      class="object-fit-cover"
      id="category-image"
    />
    <div
      class="position-absolute top-50 start-50 translate-middle"
      id="category-name"
    >
      <h3>{{ category.title }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { useGeneralStore } from "@/stores/general";
import type { Category } from "@/types/Category";

export default {
  data() {
    return {};
  },
  props: {
    category: {
      type: Object,
      default: () => ({
        name: "name",
        title: "title",
        image: "image",
      }),
    },
  },
  setup(props) {
    const router = useRouter();
    const generalStore = useGeneralStore();

    const openCategory = () => {
      generalStore.setCurrentCategory(props.category as Category);
      router.push({
        name: "category",
        params: {
          category: props.category.name,
        },
      });
    };

    return {
      openCategory,
    };
  },
};
</script>

<style scoped>
#category-image {
  transform: scale(1);
  transition: 0.4s ease-in-out;
}

#category-image:hover {
  filter: brightness(40%);
  transform: scale(1.1);
  cursor: pointer;
}

#category-name {
  z-index: 0;
  font-size: 1.75em;
  color: white;
  background: transparent;
  visibility: hidden;

  /*The following lines make the ease transition to appear and disappear when stop hovering card*/
  transition: 0.3s ease-in-out;
}

#category-card:hover #category-name {
  visibility: visible;
}
</style>

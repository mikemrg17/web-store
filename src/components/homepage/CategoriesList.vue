<template>
  <div class="">
    <div class="row row-columns-3">
      <div class="col-1 w-fit d-flex justify-content-center align-items-center">
        <ArrowIcon id="left-arrow" />
      </div>
      <div
        class="col-10 d-flex flex-row overflow-x-auto gap-5"
        id="categories-container"
      >
        <div v-for="category in categories" :key="category.name">
          <CategoryItem :category="category" />
        </div>
      </div>
      <div class="col-1 d-flex justify-content-center align-items-center">
        <ArrowIcon />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CategoryItem from "./CategoryItem.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";

export default {
  data() {
    return {
      categories: [
        {
          name: "shirts",
          title: "Shirts",
          image:
            "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          name: "t-shirts",
          title: "T-shirts",
          image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        },
        {
          name: "jackets",
          title: "Jackets",
          image:
            "https://images.unsplash.com/photo-1605908502724-9093a79a1b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGphY2tldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          name: "socks",
          title: "Socks",
          image:
            "https://images.unsplash.com/photo-1616531758364-731625b1f273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29ja3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          name: "pants",
          title: "Pants",
          image:
            "https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          name: "suits",
          title: "Suits",
          image:
            "https://plus.unsplash.com/premium_photo-1674777843441-04dd6cd672ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VpdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        },
      ],
    };
  },
  components: {
    CategoryItem,
    ArrowIcon,
  },
};
</script>

<style>
#categories-container::-webkit-scrollbar {
  margin-top: 10px;
  height: 5px;
}

/*#categories-container::-webkit-scrollbar-track {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}*/

#categories-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #404040;
  /*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);*/
}

#left-arrow {
  transform: rotate(180deg);
}
</style>

<template>
  <TheHeader />
  <RouterView />
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "./components/nav/TheHeader.vue";

export default {
  data() {
    return {};
  },
  components: {
    TheHeader,
  },
};
</script>

<template>
  <div class="position-relative text-center">
    <img :src="promotionImage" alt="Day promotion" class="img-fluid rounded" />
    <div
      class="position-absolute top-50 start-50 text-light translate-middle fs-1"
    >
      {{ message }}
    </div>
    <div class="position-absolute top-60 start-50 translate-middle-x">
      <RouterLink to="/">
        <button
          class="fs-4 border border-light bg-transparent text-light rounded"
        >
          Go to promotion
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      message: "Check out our new winter collection",
      promotionLink: "/",
      promotionImage:
        "https://staticpages.mngbcn.com/homes/images/fw23/he/septiembre/he_nn_0409_v3.jpg?imwidth=1904&imdensity=2",
    };
  },
};
</script>

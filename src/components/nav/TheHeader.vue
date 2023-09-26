<template>
  <nav
    class="bg-light navbar navbar-expand-lg navbar-light p-3 sticky-top"
    id="headerNav"
  >
    <div class="container-fluid">
      <div class="container-fluid" id="navbarNavDropdown">
        <div class="row row-cols-3">
          <div class="col-4">
            <HamburguerMenuIcon />
          </div>
          <div class="col-4 text-center">
            <RouterLink to="/">
              <img src="../../assets/essence_logo_light.png" height="35" />
            </RouterLink>
          </div>
          <div class="col-4 text-end">
            <span class="mx-5">
              <ShoppingBagIcon />
            </span>
            <span>
              <UserIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
import HamburguerMenuIcon from "../icons/HamburguerMenuIcon.vue";
import ShoppingBagIcon from "../icons/ShoppingBagIcon.vue";
import UserIcon from "../icons/UserIcon.vue";

export default {
  components: {
    RouterLink,
    HamburguerMenuIcon,
    ShoppingBagIcon,
    UserIcon,
  },
};
</script>

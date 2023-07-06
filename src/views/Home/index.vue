<script setup>
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeProduct from "./components/HomeProduct.vue";
</script>

<template>
  <div class="container">
    <home-category></home-category>
    <home-banner></home-banner>
  </div>
  <home-new />
  <home-hot />
  <home-product />
</template>

<style lang="scss" scoped></style>

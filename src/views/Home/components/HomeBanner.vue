<script setup>
import { getBannerAPI } from "@/api/home";
import { onMounted, reactive } from "vue";

const bannerList = reactive([]);

const getBanner = async () => {
  try {
    const res = await getBannerAPI();
    bannerList.push(...res.result);
  } catch (error) {}
};
onMounted(() => getBanner());
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item
        v-for="item in bannerList"
        :key="item.id"
      >
        <img v-img-lazy="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  img {
    width: 100%;
    height: 500px;
  }
}
</style>

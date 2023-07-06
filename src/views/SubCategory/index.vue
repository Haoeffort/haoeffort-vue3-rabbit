<script setup>
import GoodsItem from "../Home/components/GoodsItem.vue";
import { ref } from "vue";
import { getSubCategoryAPI } from "@/api/category";
import { useCategoryFilter } from "./hooks/useCategoryFilter";
import { useCategoryList } from "./hooks/useCategoryList";

// 面包屑数据
const { categoryFilterData } = useCategoryFilter();

const { goodList, reqData, getGoodLIst } =
  useCategoryList();

const tabChange = () => {
  reqData.page = 1;
  getGoodLIst(reqData);
};

// 触底加载更多
const disabled = ref(false);
const load = async () => {
  console.log("加载更多数据");
  //获取下一页数据
  reqData.page++;
  const res = await getSubCategoryAPI(reqData);
  goodList.value = [...goodList.value, ...res.result.items];

  if (res.result.items === 0) {
    disabled = true;
  }
};
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }"
          >首页</el-breadcrumb-item
        >
        <el-breadcrumb-item
          :to="{
            path: `/category/${categoryFilterData.parentId}`,
          }"
          >{{ categoryFilterData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{
          categoryFilterData.name
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs
        v-model="reqData.sortField"
        @tab-click="tabChange"
      >
        <el-tab-pane
          label="最新商品"
          name="publishTime"
        ></el-tab-pane>
        <el-tab-pane
          label="最高人气"
          name="orderNum"
        ></el-tab-pane>
        <el-tab-pane
          label="评论最多"
          name="evaluateNum"
        ></el-tab-pane>
      </el-tabs>
      <div class="body">
        <div
          class="body"
          v-infinite-scroll="load"
          :infinite-scroll-disabled="disabled"
        >
          <!-- 商品列表-->
          <GoodsItem
            v-for="good in goodList"
            :good="good"
            :key="good.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>

import { getSubCategoryAPI } from "@/api/category";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

export function useCategoryList() {
  // 获取数据列表
  const route = useRoute();
  const goodList = ref([]);
  const reqData = reactive({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: "publishTime",
  });

  const getGoodLIst = async (data) => {
    console.log(data)
    const res = await getSubCategoryAPI(data);
    goodList.value = res.result.items;
  };

  onMounted(() => {
    getGoodLIst(reqData);
  });
  return { goodList, reqData, getGoodLIst };
}

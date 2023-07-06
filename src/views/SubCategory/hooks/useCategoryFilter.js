import { getCategoryFilterAPI } from "@/api/category";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

export function useCategoryFilter() {
  const route = useRoute();
  const categoryFilterData = ref([]);
  const getCategoryFilter = async (id) => {
    try {
      const res = await getCategoryFilterAPI(id);
      categoryFilterData.value = res.result;
    } catch (error) {}
  };

  onMounted(() => {
    getCategoryFilter(route.params.id);
  });

  return { categoryFilterData };
}

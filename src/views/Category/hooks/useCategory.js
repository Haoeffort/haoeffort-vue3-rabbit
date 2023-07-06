import { getCategoryAPI } from "@/api/category";
import { onMounted, ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  const route = useRoute();
  const categoryList = ref({});
  const getCategory = async (id) => {
    try {
      const res = await getCategoryAPI(id);
      categoryList.value = res.result;
    } catch (error) {}
  };
  onMounted(() => getCategory(route.params.id));

  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id);
  });

  return { categoryList };
}

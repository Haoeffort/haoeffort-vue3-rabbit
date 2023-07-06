import { getBannerAPI } from "@/api/home";
import { onMounted, ref } from "vue";
export function useBanner() {
  const bannerList = ref([]);
  const getBanner = async () => {
    try {
      const res = await getBannerAPI("2");
      bannerList.value = res.result;
    } catch (error) {}
  };
  onMounted(() => getBanner());
  return { bannerList };
}

import instance from "@/utils/http";
/**
 * @description: 获取分类数据 /category?id=10020
 * @param {*} id 分类id
 * @return {*}
 */
export const getCategoryAPI = (id) => {
  return instance({
    url: "/category",
    params: {
      id,
    },
  });
};

export const getCategoryFilterAPI = (id) => {
  return instance({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
};

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return instance({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
};

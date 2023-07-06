import instance from "@/utils/http";

export function getBannerAPI() {
  return instance({
    url: "home/banner",
    method: "get",
  });
}

export function getNewAPI() {
  return instance({
    url: "home/new",
    method: "get",
  });
}

export function getHotAPI() {
  return instance({
    url: "home/hot",
    method: "get",
  });
}

export function getGoodsAPI() {
  return instance({
    url: "home/goods",
    method: "get",
  });
}

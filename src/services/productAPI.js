import axiosClient from "./axiosClient";

const readProduct = () => {
  const url = "/product";
  return axiosClient.get(url);
};

const readNewestProduct = () => {
  const url = "/product/newest";
  return axiosClient.get(url);
};

const productAPI = {
  readProduct,
  readNewestProduct,
};

export default productAPI;

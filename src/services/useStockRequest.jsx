import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fetchFail,
  fetchStart,
  getStockForPurchSuccess,
  getStockSuccess,
} from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  const getStock = async (path) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken(`/${path}`);
      const stockData = data.data;
      dispatch(getStockSuccess({ path, stockData }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const deleteStock = async (path, id) => {
    dispatch(fetchStart());
    try {
      await axiosToken.delete(`/${path}/${id}`);
      getStock(path);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const postStock=async (path,info)=>{
    dispatch(fetchStart());
    try {
     await axiosToken.post(`/${path}/`,info);
     getStock(path);
     toastSuccessNotify(`${path} Added`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Something went wrong")
      console.log(error);
    }
  }
  const putStock=async(path,info)=>{
    dispatch(fetchStart());
    try {
      await axiosToken.put(`/${path}/${info._id}`,info);
      getStock(path)
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      
    }
  }

  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const {
  //       data: { data },
  //     } = await axiosToken("/firms");
  //     dispatch(firmsSuccess(data));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };

  // const getBrands = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const {
  //       data: { data },
  //     } = await axiosToken("/brands");
  //     dispatch(brandsSuccess(data));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };
  const getStockForPurch = async () => {
    dispatch(fetchStart());
    try {
      const[prod,purch,bra,fir]=await Promise.all([
         axiosToken("/products"),
         axiosToken("/purchases"),
         axiosToken("/brands"),
         axiosToken("/firms"),
      ])
      const products=prod?.data?.data
      const purchases=purch?.data?.data
      const brands=bra?.data?.data
      const firms=fir?.data?.data
      dispatch(getStockForPurchSuccess({products,purchases,brands,firms}))
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { getStock,deleteStock,postStock,putStock,getStockForPurch };
};

export default useStockRequest;

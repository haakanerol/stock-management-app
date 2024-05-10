import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fetchFail,
  fetchStart,
  getStockSuccess,
} from "../features/stockSlice";

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

  return { getStock,deleteStock };
};

export default useStockRequest;

import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fetchFail,
  fetchStart,
  firmsSuccess,
  brandsSuccess,
} from "../features/stockSlice";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const {
        data: { data },
      } = await axiosToken("/firms");
      dispatch(firmsSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getBrands = async () => {
    dispatch(fetchStart());
    try {
      const {
        data: { data },
      } = await axiosToken("/brands");
      dispatch(brandsSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { getFirms, getBrands };
};

export default useStockRequest;

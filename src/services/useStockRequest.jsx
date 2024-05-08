import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fetchFail, fetchStart, stockSuccess } from "../features/stockSlice";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const {
        data: { data },
      } = await axiosToken("/firms");
      dispatch(stockSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { getFirms };
};

export default useStockRequest;

import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const useApiRequest = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();

  const login = async (userData) => {
    dispach(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userData
      );
      dispach(loginSuccess(data));
      toastSuccessNotify("Login successful");
      navigate("/stock")
    } catch (error) {
      dispach(fetchFail());
      toastErrorNotify("Couldn't login");
      console.log(error);
    }
  };
  const register = async (userData) => {};
  const logout = async () => {};
  return {
    login,
    logout,
    register,
  };
};

export default useApiRequest;

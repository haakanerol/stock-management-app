import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch,useSelector } from "react-redux";
import { fetchFail, fetchStart, loginSuccess, registerSuccess,logoutSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const useApiRequest = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth)

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
  const register = async (userData) => {
    dispach(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/`,
        userData
      );
      dispach(registerSuccess(data));
      toastSuccessNotify("Register successful");
      navigate("/stock")
    } catch (error) {
      dispach(fetchFail());
      toastErrorNotify("Couldn't register");
      console.log(error);
    }
  };
  const logout = async () => {
    dispach(fetchStart());
    try {
      await axios(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
          headers: { Authorization: `Token ${token}` },
         })
         dispach(logoutSuccess())
         navigate("/")
    } catch (error) {
      console.log(error);
      dispach(fetchFail());
    }
  };
  return {login,logout,register};
};

export default useApiRequest;

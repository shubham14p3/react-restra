import * as types from "./userType";
import axiosClient from "../../../utils/axios-config";

export const getUserInfo = () => {
  return async (dispatch) => {
    dispatch({ type: types.USER_INFO_REQUEST });
    try {
      const res = axiosClient.get(`/user/`);
      dispatch({ type: types.USER_INFO_SUCCESS, payload: res });
      return res;
    } catch (e) {
      dispatch({ type: types.USER_INFO_FAILURE });
      return Promise.reject(e);
    }
  };
};

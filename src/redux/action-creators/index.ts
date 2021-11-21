import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "../action-types/types";
import { Actions } from "../action-types";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(`https://registry.npmjs.org/-/v1/search`, {
        params: {
          text: term,
        },
      });

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
        payload: "에러발생!!! 🙈",
      });
    }
  };
};

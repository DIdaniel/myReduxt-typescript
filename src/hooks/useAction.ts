// src > hooks > useAction.ts

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../redux";

export const useActionsHook = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreator, dispatch);
};

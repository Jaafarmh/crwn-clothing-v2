import { createAction } from "../../utils/reducer/reducer.utils";
import USER_ACTION_TYPES from "./user.types";

// just creating an object for us,,,it is not dispatching
export const setCurrentUser = (user) => 

  createAction (USER_ACTION_TYPES.SET_CURRENT_USER ,user)
  

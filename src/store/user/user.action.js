import { createAction } from "../../utils/reducer/reducer.utils";
import USER_ACTION_TYPES from "./user.types";

// just creating an object for us,,,it is not dispatching
export const setCurrentUser = (myUser) => 

  createAction (USER_ACTION_TYPES.Set_Current_User ,myUser)
  

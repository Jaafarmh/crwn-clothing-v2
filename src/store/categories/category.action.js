import { createAction } from "../../utils/reducer/reducer.utils";
import CATEGORY_ACTION_TYPES from '../categories/category.types';

// just creating an object for us,,,it is not dispatching
export const SetCategories = (categoriesArray) => 

  createAction (CATEGORY_ACTION_TYPES.Set_Categories , categoriesArray)
  

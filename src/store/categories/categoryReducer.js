import {CATEGORY_ACTION_TYPES} from '../categories/category.types';

export const CATEGORY_INITIAL_STATE ={
    categoriesMap : {},
}

export const categoryReducer = (state = CATEGORY_INITIAL_STATE , action ) => {
    const {type, payload} = action;

    switch (type) {
        case CATEGORY_ACTION_TYPES.Set_Categories_Map :
            return{
                ...state, 
                categoriesMap : payload
            }
        default :
        return state
    }
}
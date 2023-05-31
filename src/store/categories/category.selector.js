import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
  )


  export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>
    categories.reduce((acc, theCategory) => {
      const { title, items } = theCategory;
      /// why does it have to be lower case???
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
    );
    

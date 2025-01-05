import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/booksSlice";
import filterSlice from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    books: reducer,
    filter: filterSlice,
  },
});
export default store;

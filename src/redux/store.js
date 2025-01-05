import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/booksSlice";
import filterSlice from "./slices/filterSlice";
import errorSlice from "./slices/errorSlice";

const store = configureStore({
  reducer: {
    books: reducer,
    filter: filterSlice,
    error: errorSlice
  },
});
export default store;

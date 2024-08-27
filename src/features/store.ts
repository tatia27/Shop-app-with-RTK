import { configureStore } from "@reduxjs/toolkit";
import { goodsApi } from "./api/goodsApi";
import wishlistSlice from "./wishlist/wishlistSlice";
import goodsSlice from "./card/cardSlice";

export const store = configureStore({
  reducer: {
    [goodsApi.reducerPath]: goodsApi.reducer,
    wishlists: wishlistSlice,
    goods: goodsSlice,
  },

  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(goodsApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;

import { createSlice } from "@reduxjs/toolkit";
import { Goods } from "../../types/types";

const initialState = {
  wishlistsItems: (() => {
    const storedItems = localStorage.getItem("wishlist");
    if (storedItems) {
      try {
        return JSON.parse(storedItems);
      } catch (error) {
        console.error(error);
        return [];
      }
    }
    return [];
  })(),
};

export const wishlistSlice = createSlice({
  name: "wishlists",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      let assembledItem = { ...action.payload };
      state.wishlistsItems.push(assembledItem);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistsItems));
    },
    removeFromWishlist: (state, action) => {
      const updatedWishlists = state.wishlistsItems?.filter(
        (item: Goods) => item?.id !== action.payload?.id
      );

      state.wishlistsItems = updatedWishlists;

      localStorage.setItem("wishlist", JSON.stringify(state.wishlistsItems));
    },
  },
});

export const { addToWishList, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "../../types/types";

const initialState: State = {
  goods: [],
};

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    addCardToRemoved(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (!state.goods.includes(id)) {
        state.goods.push(id);
      }
    },
  },
});

export const { addCardToRemoved } = goodsSlice.actions;

export default goodsSlice.reducer;

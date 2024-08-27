import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Goods } from "../../types/types";

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getGoods: builder.query<Goods[], void>({
      query: () => `/products`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Products" as const, id })),
              { type: "Products" as const, id: "LIST" },
            ]
          : [{ type: "Products" as const, id: "LIST" }],
    }),
    getCurrentGoods: builder.query<Goods, string>({
      query: (id) => `/products/${id}`,
    }),
    deleteGoods: builder.mutation<string, string>({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),
  }),
});

export const {
  useGetGoodsQuery,
  useGetCurrentGoodsQuery,
  useDeleteGoodsMutation,
} = goodsApi;

import { Card } from "../card/card";
import { useGetGoodsQuery } from "../../features/api/goodsApi";
import React, { useEffect, useState } from "react";
import { Filter } from "../filter/filter";
import styles from "./allGoods.module.css";
import { type Goods } from "../../types/types";
import { useSelector } from "react-redux";
import { AppState } from "../../features";

export function AllGoods() {
  const { data = [], isLoading } = useGetGoodsQuery();
  const [filterLiked, setFilterLiked] = useState(false);
  const [favoritesGoods, setFavoritesGoods] = useState<Goods[]>([]);
  const goods = useSelector((state: AppState) => state.goods.goods);

  useEffect(() => {
    try {
      const isFavoriteInternship = JSON.parse(
        localStorage.getItem("wishlist") || "[]"
      );

      setFavoritesGoods(isFavoriteInternship);
    } catch (error) {
      console.log(error);
    }
  }, [filterLiked]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Filter filterLiked={filterLiked} setFilterLiked={setFilterLiked} />
      {filterLiked ? (
        <div className={styles.cards_wrapper}>
          {favoritesGoods
            .filter((item) => {
              return !goods.some((goodId) => goodId === item.id);
            })
            .map((item) => {
              return <Card key={item.id.toString()} card={item} />;
            })}
        </div>
      ) : (
        <div className={styles.cards_wrapper}>
          {data
            .filter((item) => {
              return !goods.some((goodId) => goodId === item.id);
            })
            .map((item) => {
              return <Card key={item.id.toString()} card={item} />;
            })}
        </div>
      )}
    </>
  );
}

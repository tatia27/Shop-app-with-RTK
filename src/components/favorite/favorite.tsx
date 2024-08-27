import styles from "./favorite.module.css";
import { useDispatch } from "react-redux";
import {
  addToWishList,
  removeFromWishlist,
} from "../../features/wishlist/wishlistSlice";
import React, { useEffect, useState } from "react";
import { Goods } from "../../types/types";
import { CardProps } from "../../types/types";
import { ReactComponent as Unlike } from "../../assets/icons/unlike.svg";
import { ReactComponent as Like } from "../../assets/icons/like.svg";

export function Favorite({ card }: CardProps) {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const checkIfFavorite = (card: Goods): boolean => {
      const favorites = JSON.parse(localStorage.getItem("wishlist") || "[]");
      return favorites.some((favorite: Goods) => favorite.id === card.id);
    };

    setFavorite(checkIfFavorite(card));
  }, [card]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(card);
  };

  const toggleFavorite = (card: Goods) => {
    const isFavorite = checkIfFavorite(card);

    if (isFavorite) {
      setFavorite(false);
      dispatch(removeFromWishlist(card));
    } else {
      setFavorite(true);
      dispatch(addToWishList(card));
    }
  };

  const checkIfFavorite = (card: Goods): boolean => {
    const favorites = JSON.parse(localStorage.getItem("wishlist") || "[]");
    return favorites.some((favorite: Goods) => favorite.id === card.id);
  };

  return (
    <>
      {favorite ? (
        <Like onClick={handleClick} className={styles.favorite} />
      ) : (
        <Unlike onClick={handleClick} className={styles.favorite} />
      )}
    </>
  );
}

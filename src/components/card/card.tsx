import { Delete } from "../delete/delete";
import { Favorite } from "../favorite/favorite";
import { useNavigate } from "react-router";
import { type CardProps } from "../../types/types";
import styles from "./card.module.css";
import React from "react";

export function Card({ card }: CardProps) {
  const navigate = useNavigate();

  const handleNavigateToCard = () => {
    navigate(`/item/${card.id}`);
  };

  return (
    <div className={styles.card} onClick={handleNavigateToCard}>
      <div className={styles.card__actions}>
        <Favorite card={card} />
        <Delete id={card.id} />
      </div>
      <img src={card.image} alt="Фото товара" className={styles.main_image} />
      <span className={styles.card__title}>{card.title}</span>
    </div>
  );
}

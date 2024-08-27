import { useNavigate, useParams } from "react-router";
import { Delete } from "../delete/delete";
import { Favorite } from "../favorite/favorite";
import styles from "./fullCard.module.css";
import s from "../filter/filter.module.css";
import { useGetCurrentGoodsQuery } from "../../features/api/goodsApi";
import { Goods } from "../../types/types";
import { useSelector } from "react-redux";
import { AppState } from "../../features";
import React from "react";

export function FullCard() {
  const { id } = useParams();
  const { data = {} as Goods, isLoading } = useGetCurrentGoodsQuery(id || "");
  const goods = useSelector((state: AppState) => state.goods.goods);
  const navigate = useNavigate();

  const backToMainPage = () => navigate(`/`);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.card__actions}>
          <Favorite card={data} />
          <Delete id={data.id} />
        </div>
        <img className={styles.main_image} src={data.image} alt="Фото" />
        <div>
          <p className={styles.card__title}>{data.price} $</p>
          <p className={styles.card__title}>{data.category}</p>
          <p className={styles.card__title}>{data.title}</p>
          <p className={styles.card__title}>{data.description}</p>
        </div>
      </div>
      <button className={s.filter_button} onClick={backToMainPage}>
        Вернуться обратно
      </button>
    </div>
  );
}

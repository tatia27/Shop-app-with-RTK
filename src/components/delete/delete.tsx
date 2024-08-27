import { ReactComponent as Remove } from "../../assets/icons/delete.svg";
import styles from "./delete.module.css";
import React from "react";
import { useDeleteGoodsMutation } from "../../features/api/goodsApi";
import { useDispatch } from "react-redux";
import { addCardToRemoved } from "../../features/card/cardSlice";
import { useNavigate } from "react-router";

export function Delete({ id }: { id: string }) {
  const [deleteGoods] = useDeleteGoodsMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteProduct = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    try {
      await deleteGoods(id);
      dispatch(addCardToRemoved(id));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Remove
      className={styles.remove_card}
      onClick={(e) => handleDeleteProduct(e, id)}
    />
  );
}

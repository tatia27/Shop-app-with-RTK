import { type FilterProps } from "../../types/types";
import styles from "./filter.module.css";
import React from "react";

export function Filter({ filterLiked, setFilterLiked }: FilterProps) {
  const applyFilter = () => setFilterLiked(!filterLiked);

  return (
    <button className={styles.filter_button} onClick={applyFilter}>
      {filterLiked ? "Убрать фильтр" : "Применить фильтр"}
    </button>
  );
}

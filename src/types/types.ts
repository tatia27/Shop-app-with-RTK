export type Rating = {
  rate: number;
  count: number;
};

export type Goods = {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
  ratin?: Rating;
};

export type CardProps = {
  card: Goods;
};

export type FilterProps = {
  filterLiked: boolean;
  setFilterLiked: (value: boolean) => void;
};

export type State = {
  goods: string[];
};

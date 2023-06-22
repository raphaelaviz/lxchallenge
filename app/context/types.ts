import { ACTIONS } from "./actions";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItem {
  product: Product;  
  qty: number;
}

export interface CartState {
  products: Product[];
  cart: CartItem[];
}

export interface ContextState {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  productState: ProductState;
  productDispatch: React.Dispatch<ProductAction>;
}

export interface ProductState {
  sort: string;   
  byRating: number;
  searchQuery: string;
  categoryFilter: string | null,
}

export type CartAction =
  | {
      type: ACTIONS.LOAD_PRODUCTS;
      payload: Product[];
    }
  | {
      type: ACTIONS.ADD_TO_CART;
      payload: CartItem;
    }
  | {
      type: ACTIONS.REMOVE_FROM_CART;
      payload: Product;
    }
    | {
      type: ACTIONS.INCREMENT_QUANTITY;
      payload: Product;
    }
  | {
      type: ACTIONS.DECREMENT_QUANTITY;
      payload: Product;
    };

export interface FilterByCategoryAction {
  type: typeof ACTIONS.FILTER_PRODUCTS_BY_CATEGORY;
  payload: string | null;
}

export interface ClearFiltersAction {
  type: typeof ACTIONS.CLEAR_FILTERS;
}

export type ProductAction =
  | FilterByCategoryAction
  | ClearFiltersAction
  | {
      type: ACTIONS.SORT_BY_PRICE;
      payload: string;
    }
  | {
      type: ACTIONS.FILTER_BY_SEARCH;
      payload: string;
    }
  | {
      type: ACTIONS.SORT_BY_RATING;
      payload: string;
    }

export interface ContextProps {
  children: React.ReactNode;
}



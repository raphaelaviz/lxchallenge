import { ProductAction, CartAction, CartState, ProductState, CartItem, Product } from "./types";
import { ACTIONS } from "./actions";


export const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ACTIONS.FILTER_PRODUCTS_BY_CATEGORY:
      return { ...state, categoryFilter: action.payload };

    case ACTIONS.FILTER_BY_SEARCH:
      return { ...state, searchQuery: action.payload as string };

    case ACTIONS.CLEAR_FILTERS:
      return { ...state, categoryFilter: null, searchQuery: '', sort: '' };

    case ACTIONS.SORT_BY_PRICE:
      return { ...state, sort: action.payload as string };
      
    case ACTIONS.SORT_BY_RATING:
      return { ...state, sort: action.payload as string };  

    default:
      return state;
  }
};


export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case ACTIONS.LOAD_PRODUCTS:
      return { ...state, products: action.payload };

    case ACTIONS.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload as CartItem],
      };

    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((c) => c.product.id !== (action.payload as Product).id), 
      };

      case ACTIONS.INCREMENT_QUANTITY: {
        return {
          ...state, 
          cart: state.cart.map(item =>
            item.product.id === action.payload.id 
              ? { ...item, qty: Math.min(item.qty + 1, 5) } 
              : item
          )
        }
      }
      case ACTIONS.DECREMENT_QUANTITY: {
        return {
          ...state, 
          cart: state.cart.map(item =>
            item.product.id === action.payload.id 
              ? { ...item, qty: Math.max(item.qty - 1, 1) } 
              : item
          )
        }
      }

    default:
      return state;
  }
};
import React, { createContext, useContext, useReducer } from 'react';

const ProductContext = createContext();

const initialState = {
  products: [],
};

const actions = {
  ADD_PRODUCT: 'ADD_PRODUCT',
};

const productReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  // Action creators
  const addProduct = (product) => {
    dispatch({
      type: actions.ADD_PRODUCT,
      payload: product,
    });
  };

  return (
    <ProductContext.Provider value={{ state, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
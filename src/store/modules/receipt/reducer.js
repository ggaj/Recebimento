import produce from 'immer';

const INITIAL_STATE = {
  nfProductsTotal: '0',
  nfProductsPending: '0',
  nfProductsSuccess: '0',
  nfProducts: [],
  // readingBarcode: undefined,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@receipt/CHECK_PRODUCT': {
        const indexProduct = state.nfProducts.some(
          nfProduct =>
            nfProduct.ean === action.payload.ean && nfProduct.checked === false
        );

        if (indexProduct) {
          const products = state.nfProducts.map(product =>
            product.ean === action.payload.ean
              ? { ...product, checked: true }
              : product
          );
          draft.nfProducts = products;
          draft.nfProductsPending = state.nfProductsPending - 1;
          draft.nfProductsSuccess = parseInt(state.nfProductsSuccess) + 1;
        }
        break;
      }
      case '@receipt/GET_PRODUCTS': {
        draft.nfProducts = action.payload.products;
        draft.nfProductsTotal = action.payload.products.length;
        draft.nfProductsSuccess = 0;
        draft.nfProductsPending =
          action.payload.products.length - state.nfProductsSuccess;
        break;
      }
      // case '@receipt/GET_PRODUCTS': {
      //   draft.nfProducts = action.payload.products;
      //   draft.nfProductsTotal = action.payload.products.length;
      //   draft.nfProductsSuccess = 0;
      //   draft.nfProductsPending =
      //     action.payload.products.length - state.nfProductsSuccess;
      //   break;
      // }
      default:
    }
  });
}

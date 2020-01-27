export function checkProduct(ean) {
  return {
    type: '@receipt/CHECK_PRODUCT',
    payload: { ean },
  };
}

export function getProducts(products) {
  return {
    type: '@receipt/GET_PRODUCTS',
    payload: { products },
  };
}

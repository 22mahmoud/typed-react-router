import { useParams } from "react-router-dom";

import type { ProductParam, } from "../../lib/router/routes";

export const ProductPage = () => {
  const { productSlug } = useParams<ProductParam>();

  return <div>product slug: {productSlug}</div>;
};

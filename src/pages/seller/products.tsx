import { Link } from "react-router-dom";
import { routes } from "../../lib/router/routes";

export const ProductsPage = () => {
  return (
    <Link to={routes.seller.getProduct({ productSlug: "1234" })}>
      Product 1
    </Link>
  );
};

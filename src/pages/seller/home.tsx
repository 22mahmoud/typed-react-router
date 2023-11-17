import { Link } from "react-router-dom";
import { routes } from "../../lib/router/routes";

export const SellerHomePage = () => {
  return (
    <Link to={routes.seller.getProducts({ _search: { sort: "date" } })}>
      Products
    </Link>
  );
};

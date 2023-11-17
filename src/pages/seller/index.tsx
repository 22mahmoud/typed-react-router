import { RouteObject } from "react-router-dom";

import { routes } from "../../lib/router/routes";

import { SellerHomePage } from "./home";
import { ProductsPage } from "./products";
import { ProductPage } from "./product";

export const sellerRouter: RouteObject = {
  path: routes.seller.home,
  children: [
    {
      index: true,
      element: <SellerHomePage />,
    },
    {
      path: routes.seller.products,
      element: <ProductsPage />,
    },
    {
      path: routes.seller.product,
      element: <ProductPage />,
    },
  ],
};

import { RouteObject } from "react-router-dom";
import { routes } from "../../lib/router/routes";

export const adminRouter: RouteObject = {
  path: routes.admin.home,
  children: [
    {
      index: true,
      element: <>Super Admin dashboard</>,
    },
    {
      path: routes.admin.sellers,
      element: <>All Sellers</>,
    },
    {
      path: routes.admin.seller,
      element: <>Seller Page</>,
    },
    {
      path: routes.admin.settings,
      element: <>marketplace settings</>,
    },
  ],
};

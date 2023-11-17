import { RouteObject } from "react-router-dom";

import { adminRouter } from "./admin";
import { sellerRouter } from "./seller";

export const router: RouteObject[] = [
  {
    path: "/",
    children: [adminRouter, sellerRouter],
  },
];

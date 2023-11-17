import { getPath } from "./get-path";

export type SellerParam = { sellerSlug: string };
export type ProductParam = { productSlug: string };
export type ProductsSearchParam = { sort: "date" | "name" };

class AdminRoutes {
  baseUrl = "/admin";

  // react-router routes paths
  home = `${this.baseUrl}`;
  sellers = `${this.baseUrl}/sellers`;
  seller = `${this.sellers}/:sellerSlug`;
  settings = `${this.sellers}/:settings`;

  // getters
  getHome = getPath(this.home);
  getSellers = getPath(this.sellers);
  getSeller = getPath<SellerParam>(this.seller);
  getSettings = getPath(this.settings);
}

class SellerRoutes {
  baseUrl = "/seller";

  // react-router routes paths
  home = `${this.baseUrl}`;
  products = `${this.baseUrl}/products`;
  product = `${this.products}/:productSlug`;

  // getters
  getHome = getPath(this.home);
  getProducts = getPath<null, ProductsSearchParam>(this.products);
  getProduct = getPath<ProductParam>(this.product);
}

export const routes = {
  seller: new SellerRoutes(),
  admin: new AdminRoutes(),
};

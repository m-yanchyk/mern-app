import React from "react";

import links from "../../utils/links";

const Main = React.lazy(() => import("../../pages/Main/Main"));
const Products = React.lazy(() => import("../../pages/Products/Products"));

const routes = [
  {
    path: links.main,
    component: Main,
    title: "Головна",
  },
  {
    path: links.products,
    component: Products,
    title: "Продукти",
  },
];

export default routes;

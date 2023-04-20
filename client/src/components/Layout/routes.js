import React from "react";

import links from "../../utils/links";

const Main = React.lazy(() => import("../../pages/Main/Main"));
const AboutUs = React.lazy(() => import("../../pages/AboutUs/AboutUs"));
const Auth = React.lazy(() => import("../../pages/Auth/Auth"));
const Settings = React.lazy(() => import("../../pages/Settings/Settings"));
const Basket = React.lazy(() => import("../../pages/Basket/Basket"));

const routes = [
  {
    path: links.main,
    component: Main,
    title: "Головна",
  },
  {
    path: links.aboutUs,
    component: AboutUs,
    title: "Про нас",
  },
  {
    path: links.auth,
    component: Auth,
    title: "Авторизація",
  },
  {
    path: links.settings,
    component: Settings,
    title: "Налаштування",
  },
  {
    path: links.basket,
    component: Basket,
    title: "Кошик",
  },
];

export default routes;

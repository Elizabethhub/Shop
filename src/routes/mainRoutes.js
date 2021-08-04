import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";

const mainRoutes = [
  {
    name: {
      en: "Home",
      ru: "Главная",
      ua: "Головна",
    },
    path: "/",
    icon: "",
    component: HomePage,
    exact: true,
  },
  {
    name: {
      en: "Products",
      ru: "Продукты",
      ua: "Продукти",
    },
    path: "/products",
    icon: "",
    component: ProductsPage,
    exact: false,
  },
  {
    name: {
      en: "Cart",
      ru: "Корзина",
      ua: "Кошик",
    },
    path: "/cart",
    icon: "",
    component: CartPage,
    exact: true,
  },
  {
    name: {
      en: "Registration",
      ru: "Регистрация",
      ua: "Реєстрація",
    },
    path: "/register",
    icon: "",
    component: AuthPage,
    exact: true,
  },
  {
    name: {
      en: "Administration",
      ru: "Администрирование",
      ua: "Адміністрування",
    },
    path: "/admin",
    icon: "",
    component: AdminPage,
    exact: true,
  },
  {
    name: {
      en: "Login",
      ru: "Войти",
      ua: "Увійти",
    },
    path: "/login",
    icon: "",
    component: AuthPage,
    exact: true,
  },
];
export default mainRoutes;

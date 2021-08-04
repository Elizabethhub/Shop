import ProductList from "../Components/productList/ProductList";

export const productsRoutes = [
  {
    name: "Мобильные телефоны",
    path: "/phones",
    component: ProductList,
    exact: true,
    category: "phones",
  },
  {
    name: "Ноутбуки",
    path: "/laptops",
    component: ProductList,
    exact: true,
    category: "laptops",
  },
];

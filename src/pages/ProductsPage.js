import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { productsRoutes } from "../routes/productsRoutes";
import { ProductPageContainer } from "./ProductsPageStyled";

const ProductPage = ({ match }) => {
  return (
    <ProductPageContainer>
      <ul className="navigationList">
        {productsRoutes.map((route) => (
          <li key={route.path} className="navigationListItem">
            <NavLink
              exact={route.exact}
              className="navigationListItemAnchor"
              activeClassName="activeNavigationListItemAnchor"
              to={{ pathname: match.url + route.path, state: { category: route.category } }}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Switch>
        {productsRoutes.map((route) => (
          <Route path={match.path + route.path} exact={route.exact} component={route.component} key={route.path} />
        ))}
      </Switch>
    </ProductPageContainer>
  );
};

export default ProductPage;

import React from "react";
import { NavLink } from "react-router-dom";
import mainRoutes from "../../../routes/mainRoutes";
import colors from "../../../styles/colors";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = ({ language = "en" }) => {
  return (
    <HeaderListStyled colors={colors}>
      {mainRoutes.map((headerItem) => (
        <li key={headerItem.path} className="navigationListItem">
          <NavLink
            className="navigationListItemAnchor"
            activeClassName="activeNavigationListItemAnchor"
            to={headerItem.path}
            exact={headerItem.exact}
          >
            {headerItem.name[language]}
          </NavLink>
        </li>
      ))}
    </HeaderListStyled>
  );
};

export default HeaderList;

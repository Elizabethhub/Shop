import React from "react";
import { NavLink } from "react-router-dom";

const HeaderListItem = ({ path, exact, name, language, isAuth, isPrivate, isRestricted }) => {
  return (
    <>
      {!isPrivate && !isRestricted && (
        <li key={path} className="navigationListItem">
          <NavLink
            className="navigationListItemAnchor"
            activeClassName="activeNavigationListItemAnchor"
            to={path}
            exact={exact}
          >
            {name[language]}
          </NavLink>
        </li>
      )}
      {isPrivate && !isRestricted && isAuth && (
        <li key={path} className="navigationListItem">
          <NavLink
            className="navigationListItemAnchor"
            activeClassName="activeNavigationListItemAnchor"
            to={path}
            exact={exact}
          >
            {name[language]}
          </NavLink>
        </li>
      )}
      {!isPrivate && isRestricted && !isAuth && (
        <li key={path} className="navigationListItem">
          <NavLink
            className="navigationListItemAnchor"
            activeClassName="activeNavigationListItemAnchor"
            to={path}
            exact={exact}
          >
            {name[language]}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default HeaderListItem;

import React from "react";
import mainRoutes from "../../../routes/mainRoutes";
import colors from "../../../styles/colors";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = (language = "en") => {
  return (
    <HeaderListStyled colors={colors}>
      {mainRoutes.map((item) => (
        <li key={item.path} className="headerListItem">
          <a className="headerListLink" href={item.path}>
            {item.name[language]}
          </a>
        </li>
      ))}
    </HeaderListStyled>
  );
};

export default HeaderList;

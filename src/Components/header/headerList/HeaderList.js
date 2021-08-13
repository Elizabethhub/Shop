import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../../redux/auth/authActions";
import mainRoutes from "../../../routes/mainRoutes";
import colors from "../../../styles/colors";
import HeaderListItem from "./HeaderListItem";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = ({ language = "en", logOut, isAuth }) => {
  const exit = () => {
    logOut();
  };
  return (
    <HeaderListStyled colors={colors}>
      {mainRoutes.map((headerItem) => (
        <HeaderListItem {...headerItem} language={language} key={headerItem.path} isAuth={isAuth} />
      ))}
      {isAuth && <li onClick={exit}>logout</li>}
    </HeaderListStyled>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.idToken,
  };
};

export default connect(mapStateToProps, { logOut })(HeaderList);

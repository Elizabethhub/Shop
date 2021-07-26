import React from "react";
import colors from "../../styles/colors";
import { SectionStyled } from "./SectionStyled";
// import PropTypes from "prop-types";

const Section = ({ children, title }) => {
  return (
    <SectionStyled colors={colors}>
      <h2 className="sectionTitle">{title.toUpperCase()}</h2>
      {children}
    </SectionStyled>
  );
};

// Section.defaultProps = {
//   title: "No titile",
// };
// Section.propTypes = {
//   title: propTypes.string,
//   children: propTypes.node,
// };
export default Section;

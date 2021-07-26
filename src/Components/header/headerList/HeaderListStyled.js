import styled from "styled-components";

export const HeaderListStyled = styled.ul`
  display: flex;
  align-items: center;
  .headerListItem:not(:last-child) {
    margin-right: 20px;
  }
  .headerListLink {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    color: ${(props) => props.colors.darkColors.main};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.colors.darkColors.active};
    }
    &:active {
    }
  }
`;

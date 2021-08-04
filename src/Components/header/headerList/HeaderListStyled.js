// import styled from "styled-components";

// export const HeaderListStyled = styled.ul`
//   display: flex;
//   align-items: center;
//   .headerListItem:not(:last-child) {
//     margin-right: 20px;
//   }
//   .headerListLink {
//     text-decoration: none;
//     text-transform: uppercase;
//     font-weight: 700;
//     color: ${(props) => props.colors.darkColors.main};
//     cursor: pointer;
//     &:hover {
//       color: ${(props) => props.colors.darkColors.active};
//     }
//     &:active {
//     }
//   }
// `;
import styled from "styled-components";

export const HeaderListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: calc(95vh - 60px);
  margin-top: 60px;
  background-color: #424242;
  align-items: center;
  padding-top: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    background-color: inherit;
    margin: 0;
    padding-top: 0;
    align-items: center;
    justify-content: space-between;
  }
  .navigationListItem {
    margin-top: 10px;
    @media (min-width: 768px) {
      margin-top: 0;
    }
    &:not(:last-child) {
      margin-right: 10px;
      @media (min-width: 768px) {
        margin-right: 20px;
      }
    }
  }
  .navigationListItemAnchor {
    color: ${(props) => props.colors.darkColors.main};
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
  }
  .activeNavigationListItemAnchor {
    color: ${(props) => props.colors.darkColors.active};
  }
`;

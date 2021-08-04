import React from "react";
import { ProductListItemStyled } from "./ProductListItemStyled";
import colors from "../../../styles/colors";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/cart/cartActions";

const ProductListItem = ({ name, image, description, price, isSale, addToCart, id }) => {
  const addProduct = () => {
    addToCart({ name, price, id });
  };
  return (
    <ProductListItemStyled colors={colors}>
      <div className="phoneListItemWrapper">
        <h3 className="phoneListItemTitle">{name}</h3>
        <img src={image} alt={name} className="phoneListItemImg" />
        <p className="phoneListItemSale">
          <span className="phoneListItemName">Sale:</span>
          {isSale ? "Действует акционная цена" : "В акции не участвует"}
        </p>
        <p className="phoneListItemDescription">
          <span className="phoneListItemName">Description: </span>
          {description}
        </p>

        <p className="phoneListItemPrice">
          <span className="phoneListItemName">Price:</span>
          <span>{price}</span>
        </p>
        <div className="phoneListItemButtonsGroup">
          <button type="button" className="addToCartButton" onClick={addProduct}>
            Add to Cart
          </button>
          <button type="button" className="detailsButton">
            Details
          </button>
        </div>
      </div>
    </ProductListItemStyled>
  );
};

export default connect(null, { addToCart: addToCart })(ProductListItem);

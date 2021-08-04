import React, { Component } from "react";
import { connect } from "react-redux";
import { getLaptops, getPhones } from "../../redux/products/productActions";
import { getAllAdvByCategory } from "../../services/Api";
import ProductListItem from "./productListItem/ProductListItem";
import { ProductListStyled } from "./ProductListStyled";

class ProductList extends Component {
  async componentDidMount() {
    const res = await getAllAdvByCategory(this.props.category);
    this.props.category === "laptops" && this.props.getLaptops(res);
    this.props.category === "phones" && this.props.getPhones(res);
  }

  render() {
    return (
      <ProductListStyled>
        {this.props.products.map((product) => (
          <ProductListItem {...product} key={product.id} addToCart={this.props.addToCart} />
        ))}
      </ProductListStyled>
    );
  }
}

const mapStateToProps = (state, props) => ({
  category: props.location.state.category,
  products: state.products.items[props.location.state.category],
});

export default connect(mapStateToProps, { getLaptops, getPhones })(ProductList);

// const ProductList = ({ products = [], addToCart }) => {
//   return (
//     <ProductListStyled>
//       {products.map((product) => (
//         <ProductListItem {...product} key={product.id} addToCart={addToCart} />
//       ))}
//     </ProductListStyled>
//   );
// };

// export default ProductList;

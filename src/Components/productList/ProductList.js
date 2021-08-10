import React, { Component } from "react";
import { connect } from "react-redux";
import { setFilter } from "../../redux/products/productActions";
// import { getLaptops, getPhones } from "../../redux/products/productActions";
import { getAllAdvByCategoryOperation } from "../../redux/products/productsOperations";
import { productItemsSelector } from "../../redux/products/productsSelector";
import Filter from "../filter/Filter";
// import { getAllAdvByCategory } from "../../services/Api";
import ProductListItem from "./productListItem/ProductListItem";
import { ProductListStyled } from "./ProductListStyled";

class ProductList extends Component {
  async componentDidMount() {
    // const res =
    await this.props.getAllAdvByCategoryOperation(this.props.category);
    this.props.setFilter("");

    // this.props.category === "laptops" && this.props.getLaptops(res);
    // this.props.category === "phones" && this.props.getPhones(res);
  }

  render() {
    return (
      <>
        <Filter />
        <ProductListStyled>
          {this.props.products.map((product) => (
            <ProductListItem {...product} key={product.id} addToCart={this.props.addToCart} />
          ))}
        </ProductListStyled>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  category: props.location.state.category,
  // products: state.products.items[props.location.state.category],
  products: productItemsSelector(state, props.location.state.category),
});

export default connect(mapStateToProps, { getAllAdvByCategoryOperation, setFilter })(ProductList);

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

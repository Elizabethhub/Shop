import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import { createOrder } from "../../redux/cart/cartActions";
import mainRoutes from "../../routes/mainRoutes";
import PrivateRoutes from "../../routes/PrivateRoutes";
import PublicRoutes from "../../routes/PublicRoutes";
// import data from "../../Data";
// import { createNewOrder, getAllAdvByCategory } from "../../services/Api";
// import AdvForm from "../admin/AdvForm";
// import CartList from "../cartList/CartList";
// import ProductList from "../productList/ProductList";
// import Section from "../section/Section";
import { MainStyled } from "./MainStyled";

// const getDataByCategory = async (category) => {
//   const response = await getAllAdvByCategory(category);
//   if (response.data) {
//     return Object.keys(response.data).map((key) => ({ id: key, ...response.data[key] }));
//   }
//   return [];
// };

class Main extends Component {
  // state = {
  //   cart: [],
  //   products: { phones: [], laptops: [] },
  // };

  // async componentDidMount() {
  //   const phones = await getDataByCategory("phones");
  //   const laptops = await getDataByCategory("laptops");
  //   this.setState({ products: { laptops, phones } });
  // }

  // addNewAdv = (product) => {
  //   this.setState((prev) => ({
  //     products: { ...prev.products, [product.category]: [...prev.products[product.category], product] },
  //   }));
  // };

  // addToCart = (product) => {
  //   this.setState((prev) => ({
  //     cart: [...prev.cart, product],
  //   }));
  // };

  // removeFromCart = (id) => {
  //   this.setState((prev) => ({
  //     cart: prev.cart.filter((product) => product.id !== id),
  //   }));
  // };

  // removeAllFromCart = () => {
  //   this.setState({ cart: [] });
  // };

  // createOrder = async (order) => {
  //   await createNewOrder(order);
  //   createOrder();
  // };

  render() {
    return (
      <MainStyled>
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoutes key={route.path} {...route} isAuth={this.props.isAuth} />
            ) : (
              <PublicRoutes key={route.path} {...route} isAuth={this.props.isAuth} />
            )
          )}
        </Switch>
      </MainStyled>
    );
  }
}

const mapStateToProps = (state) => {
  return { isAuth: state.auth.idToken };
};

export default connect(mapStateToProps, { createOrder })(Main);

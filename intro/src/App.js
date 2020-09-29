import React, { Component } from "react";
//navinin lokasyonunu girmem gerekiyor!
import Navi from "./Navi";
import Kategori from "./Kategori";
import ProductListesi from "./ProductListesi";

import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";

import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };

  addToCart = (product) => {
    let newCart = this.state.cart;

    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart",2);
  };

  removeFromCart = (product,stat) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    if(stat===2)
    {
      alertify.error(product.productName + " deleted from your cart", 2);
    }
    else{
      alertify.alert(product.productName + " deleted from your cart", 2);
    }
    
  };

  changeCategory = (
    category //bu fonksiyonu props olarak gönderiyoruz kategori classına
  ) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    let CategoryInfo = { title: "Category List", Age: "30" };
    let ProductListInfo = { title: "Product List" };
    return (
      <div className="App">
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />

          <Row>
            <Col xs="4">
              <Kategori
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={CategoryInfo}
              ></Kategori>
            </Col>
            <Col xs="8">
              <Switch>

                <Route
                  exact
                  path="/"
                  
                  render={(props) => (
                    <ProductListesi
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      info={ProductListInfo}
                      products={this.state.products}
                    ></ProductListesi>
                  )}
                />

                <Route exact path="/cart"   render={(props) => (
                    <CartList
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    ></CartList>
                  )} />

                  <Route path="/Form" component={FormDemo1}/>
                  <Route path="/Form2" component={FormDemo2}/>

                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

/*function App() {   //changecategory fonksiyonunu mecburen buraya tasıyacagız o sebeple fonksiyon component degilde class component yapmamız gerekti.
  let CategoryInfo = { title: "Category List", Age: "30" };
  let ProductListInfo = { title: "Product List" };

  return (
    //içeride naviyi cagırıyoruz
    <div className="App">
      <Container>
        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="4">
            <Kategori info={CategoryInfo}></Kategori>
          </Col>
          <Col xs="8">
            <ProductListesi info={ProductListInfo}></ProductListesi>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App; */

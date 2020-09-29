import React, { Component } from "react";
import { ListGroupItem, ListGroup } from "reactstrap";
export default class Kategori extends Component {
  //burada state obje ve içinde 1 tane dizi var.
  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiments" },
    ],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  //burada this.props dedigimiz zaman kategori classındaki degil component classındaki verilere erişebiliyoruz bu cok onemli.

  render() {
    return (
      <div>
        <h1 style={{ color: "gray" }}>{this.props.info.title}</h1>
        {/*  <h6 style={{ color: "violet" }}>
          kategorideki ürün sayısı {this.props.info.Age}
        </h6> */}
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              active={
                category.categoryName === this.props.currentCategory
                  ? true
                  : false
              }
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}

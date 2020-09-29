import React, { Component } from "react";
import { Table,Button } from "reactstrap";

export default class ProductListesi extends Component {
    sepet={
        sepeteEklenenler: [],
    }


  

  render() {
    return (
      <div>
        <h5>{this.props.info.title + " "}ürünler</h5>
        <h6>{this.props.currentCategory}</h6>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity PerUnit</th>
              <th>Unit In Stock</th>
                <th></th>
            </tr>
          </thead>
          <tbody>
            {
              //map for döngüsü categori sayısı kadar
              this.props.products.map((product) => (
                <tr key={product.id}>
                    <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitsInStock}</td>
                  <td><Button onClick={()=>this.props.addToCart(product)} color="success">Sepete Ekle</Button></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

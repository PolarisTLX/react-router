import React, { Component } from 'react';
import './App.css';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';

const products = [
  {
    name: 'iPad',
    price: 200
  },
  {
    name: 'iPhone',
    price: 10000000000
  },
  {
    name: 'iPod',
    price: 0
  },

];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    };

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();
    this.setState({   products  });
  }

  getProducts() {
    return this.state.products;
  }

  onAdd(name, price) {
    // console.log("onAdd method",name, price);
    const products = this.getProducts();
    products.push({
      name,
      price
    });
    this.setState({  products  });
  }

  onDelete(name) {
    const products = this.getProducts();

    const filteredProducts = products.filter(product => product.name !== name);
    // console.log(filteredProducts);
    this.setState({
      products: filteredProducts
    });
  }

  onEditSubmit(name, price, originalName) {
    let products = this.getProducts();

    products = products.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.price = price;
      }

      return product;
    });

    this.setState({ products });
  }

  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>

        <AddProduct
          onAdd={this.onAdd}

        />

        {
          this.state.products.map(product =>
            < ProductItem
              key={product.name}
              {...product}
              onDelete={this.onDelete}
              onEditSubmit={this.onEditSubmit}
            />
          )
        }
      </div>
    );
  }
}

export default App;

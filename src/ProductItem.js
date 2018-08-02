import React, { Component } from 'react';

class ProductItem extends Component {

  constructor(props) {
    super(props)

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    // this.props.onDelete(this.props.name);
    // alternatively with ES6 deconstruction:
    const { onDelete, name } = this.props;
    onDelete(name);
  }

  render() {

    const { name, price } = this.props;

    return (
        <div>
          {name}
          {` : `}
          {price}
          {` : `}
          <button onClick={this.onDelete}>Delete</button>
        </div>
    );
  }
}

export default ProductItem;

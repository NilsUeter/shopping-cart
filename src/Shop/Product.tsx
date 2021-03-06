import * as React from "react";

export interface IProduct {
  titel: string;
  description: string;
  image: string;
  count: number;
  price: number;
}

export interface IProductProps {
  id: string;
  product: IProduct;
  onItemClick(st: string, amount: number): void;
}

export interface IProductState {
  amount: number;
}
export class Product extends React.Component<IProductProps, IProductState> {
  constructor(props: IProductProps) {
    super(props);
    this.state = { amount: 1 };
  }

  public onClickLocal = () => {
    this.props.onItemClick(this.props.id, this.state.amount);
  };

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ amount: +e.target.value });
  };

  public render() {
    return (
      <div className="Product">
        <img src={"images/" + this.props.product.image} alt="" height="450" />
        <div>
          <p className="desc">Titel:&nbsp;</p>
          <p className="attribute"> {this.props.product.titel}</p>
          <div className="clear" />
          <p className="desc">Description:&nbsp;</p>
          <p className="attribute"> {this.props.product.description}</p>
          <div className="clear" />
          <p className="desc">In Stock:&nbsp;</p>
          <p className="attribute"> {this.props.product.count}</p>
          <div className="clear" />
          <p className="desc">Price:&nbsp;</p>
          <p className="attribute"> {this.props.product.price}€</p>
          <div className="clear" />
          <br />
          <p className="desc">Amount:</p>
          <input
            className="attribute"
            type="number"
            min="1"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.amount}
          />
          <div className="clear" />
          <br />
          <button className="cart-button attribute" onClick={this.onClickLocal}>
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default Product;

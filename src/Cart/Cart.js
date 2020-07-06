import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import StripeCheckout from "./node_modules/react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Cart.module.css";

const Cart = () => {
  const itemsSelector = (state) => state.addedItems;
  const items = useSelector(itemsSelector);
  const priceSelector = (state) => state.totalPrice;
  const totalPrice = useSelector(priceSelector);

  let addedItems = items.length ? (
    items.map((item) => {
      console.log(item);
      return (
        <li className={classes.item} key={item.id}>
          <div className={classes.item_img}>
            <img src={item.img} alt={item.img} className="" />
          </div>

          <div className={classes.description}>
            <span className={classes.item_name}>{item.name}</span>
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
            <p>
              <b>QTY: {item.qty}</b>
            </p>
            <div className="">
              <Link to="/cart">
                <i className="material-icons">arrow_drop_up</i>
              </Link>
              <Link to="/cart">
                <i className="material-icons">arrow_drop_down</i>
              </Link>
            </div>
            <button className="">Remove</button>
          </div>
        </li>
      );
    })
  ) : (
    <p>Nothing.</p>
  );
  return (
    <Layout>
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
        <div className={classes.total_price}>
          <p>TOTAL: {totalPrice} $</p>
          <StripeCheckout stripeKey="pk_test_51H0mngCFTCnD9GkdfH2LGGUd99Km56HKV30iLRaWLMwORkyXXUUiBaMeGEnpI4DcdVhjEMugRrFzLzWNHxTYZkrk002z29Teih" />
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
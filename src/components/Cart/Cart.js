import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import { CardElement, injectStripe } from "react-stripe-elements";
import classes from "./Cart.module.css";

const Cart = ({ stripe }) => {
  const itemsSelector = (state) => state.addedItems;
  const items = useSelector(itemsSelector);
  const priceSelector = (state) => state.totalPrice;
  const totalPrice = useSelector(priceSelector);
  const [status, setStatus] = useState("default");

  // submit payment
  const submit = async (e) => {
    e.preventDefault();

    setStatus("submitting");
    try {
      let { token } = await stripe.createToken({ name: "Name" });

      let response = await fetch("/.netlify/functions/charge", {
        method: "POST",
        body: JSON.stringify({
          amount: totalPrice * 100,
          token: token.id,
        }),
      });

      if (response.ok) {
        setStatus("complete");
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "complete") {
    return <div className="CheckoutForm-complete">Payment successful!</div>;
  }

  // render added items
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
        </div>
        <form onSubmit={submit}>
          <h4>Would you like to complete the purchase?</h4>
          <div className={classes.card_element}>
            <CardElement />
          </div>
          <button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting" : "Submit Order"}
          </button>
          {status === "error" && (
            <div className="CheckoutForm-error">Something went wrong.</div>
          )}
        </form>
      </div>
    </Layout>
  );
};

export default injectStripe(Cart);

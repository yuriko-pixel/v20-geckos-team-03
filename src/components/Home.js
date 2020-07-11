import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import homestyle from "../styles/homestyle.css";
import { incrementInCart, decrementInCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const inCartSum = (state) => state.inCartSum;

const Home = (props) => {
  const dispatch = useDispatch();
  const [isFetched, setFetched] = useState(false);
  const cartSum = useSelector(inCartSum);


  return (
    <Layout>
      <div className="container">
        <div className="img">
          <span>Doughnut Doughnut Doughnut!</span>
        </div>
        <p className="carttitle">Doughnut Collections</p>
        <div className="cartcontainer">
          <div className="gotocartcon">
            <span class="material-icons arrow">arrow_forward</span>
            <span className="gotocart">Go to Cart</span>
            <span class="material-icons arrow">arrow_back</span>
          </div>
          <div className="container1 flex">
            {!props.data ? (
              <div>Loading</div>
            ) : (
              <div className="contents">
                {props.data.map((item) => (
                  <div className="doughcon">
                    <div className="imgcon">
                      <Link to={"/doughnut/" + item.id}>
                        <img src={item.img} className="doughimg" />
                      </Link>
                    </div>
                    <div className="iconcon flex">
                      <Link to={"/doughnut/" + item.id}>
                        <span className="doughname">{item.name}</span>
                      </Link>
                    </div>
                    <button
                      className="cartchange"
                      onClick={() => dispatch(incrementInCart(item.id))}
                    >
                      Add to cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { getData } from "../contentful";
import classes from "./ProductPage.module.css";
import Layout from "../Layout";
import { useDispatch } from "react-redux";
import { incrementInCart } from "../../redux/action";

const ProductPage = (props) => {
  const [doughnutsLists, setDoughnutsLists] = useState(null);
  const dispatch = useDispatch();
  const productID = parseInt(props.match.params.id);

  useEffect(() => {
    getData().then((response) => {
      setDoughnutsLists(response);
    });
  }, []);

  const addItemHandler = (e) => {
    e.preventDefault();
    const qty = parseInt(e.target.qty.value);
    console.log(qty);
    dispatch(incrementInCart(productID, qty));
  };

  const renderProduct = () => {
    if (doughnutsLists) {
      const selectedDoughnut = doughnutsLists.find((doughnut) => {
        return doughnut.id === productID;
      });

      return (
        <div className={classes.Main}>
          <div className={classes.Product_img}>
            <img src={`https://${selectedDoughnut.img}`} alt="doughnut_image" />
          </div>
          <div className={classes.Product_Description}>
            <h2 className={classes.Product_Title}>{selectedDoughnut.name}</h2>
            <h3 className={classes.Product_Price}>
              {selectedDoughnut.price} $
            </h3>
            <h4>{selectedDoughnut.description}</h4>
            <form onSubmit={addItemHandler} className={classes.Product_Button}>
              <label>QTY:</label>
              <input
                className={classes.Input}
                name="qty"
                type="number"
                min="1"
              />
              <span>ADDED!</span>
              <button className={classes.button}> ADD TO CART</button>
            </form>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  };

  const renderOtherProducts = () => {
    if (doughnutsLists) {
      return doughnutsLists.map((doughnut) => {
        return (
          <div className={classes.Others_Product} key={doughnut.id}>
            <img src={doughnut.img} alt={"product"}></img>
            <p>{doughnut.name}</p>
            <p>{doughnut.price}</p>
          </div>
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  };

  return (
    <Layout>
      <div className={classes.Product_page}>{renderProduct()}</div>
      <div style={{ fontSize: "30px" }}>OTHER PRODUCTS</div>
      <div className={classes.Others}>{renderOtherProducts()}</div>
    </Layout>
  );
};

export default ProductPage;

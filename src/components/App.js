import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import ProductPage from "./ProductPage/ProductPage";
import Cart from "../components/Cart/Cart";
import { fetchItems } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Elements, StripeProvider } from "react-stripe-elements";

const App = () => {
  const [doughnutsLists, setDoughutsLists] = useState(null);
  const dispatch = useDispatch();
  const itemsSelector = (state) => state.items;
  const items = useSelector(itemsSelector);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} data={items} />}
        />
        <Route
          path="/doughnut/:id"
          render={(props) => <ProductPage {...props} data={items} />}
        />{" "}
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
          <Elements>
            <Route path="/cart" component={Cart} />
          </Elements>
        </StripeProvider>
      </Router>
    </div>
  );
};

export default App;

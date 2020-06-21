import React from 'react';
import Layout from './Layout'
import {Link} from 'react-router-dom'
import homestyle from '../styles/homestyle.css'
import {incrementInCart, decrementInCart }from '../redux/action'
import { useDispatch, useSelector } from "react-redux";


const item = state => state;

const Home = props => {
  const doughnut = useSelector(item);
  const dispatch = useDispatch();

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
                {
                  doughnut.map(item=>
                    <div className="doughcon">
                      <div className="imgcon">
                      <Link to={'/' + item.name}><img src={item.img} className="doughimg"/></Link>
                    </div>
                    <div className="iconcon flex">
                      <Link to={'/' + item.name}>
                        <span className="doughname">
                          {item.name}
                        </span>
                      </Link>
                    </div>
                    <div className="cartNum flex">
                      <button className="cartchange left" onClick={e=> dispatch(decrementInCart(e.target.value))} 
                        value={item.id}>-</button>
                      <div  className="cartsum">{item.inCartSum}</div>
                      <button className="cartchange" onClick={e=> dispatch(incrementInCart(e.target.value))} value={item.id}>+</button>
                    </div>
                  </div>
                  )
                }
              </div>
            </div>
        </div>
      </Layout>
    )
}

export default Home;

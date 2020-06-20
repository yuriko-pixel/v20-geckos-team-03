import React from 'react';
import Layout from './Layout'
import {Link} from 'react-router-dom'
import homestyle from '../styles/homestyle.css'
import store from '../redux/store'

const Home = ()=> {
  const doughnut = store.getState();
  console.log(doughnut);
    return (
      <Layout>
          <div className="container">
            <div className="img">
              <span>Doughnut Doughnut Doughnut!</span>
            </div>
            <p className="carttitle">Doughnut Collections</p>
            <div className="cartcontainer">
              <div className="flex">
                {
                  doughnut.map(item=>
                    <div className="doughcon">
                      <div className="imgcon">
                      <Link to={'/' + item.name}><img src={item.img} className="doughimg"/></Link>
                    </div>
                    <div className="iconcon flex">
                      <div className="icon">
                        <span class="material-icons icon" id={item.id}>add_shopping_cart</span>
                      </div>
                      <Link to={'/' + item.name}>
                        <span className="doughname">
                          {item.name}
                        </span>
                      </Link>
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

export default Home
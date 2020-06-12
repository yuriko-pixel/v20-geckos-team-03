import React from 'react';
import Layout from './Layout'
import {Link} from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

class Home extends React.Component {
  static contextType = ThemeContext;

  render() {
    const doughnuts = this.context;
    console.log(this.context);
    return (
      <Layout>
        <div className="container">
          <div className="img">
            <span>Doughnut Doughnut Doughnut!</span>
          </div>
          <p>Doughnut Collections</p>
          <div className="cartcontainer">
            <div className="flex">
            {/* {
              doughnuts.map(item=>
                  <div className="doughcon">
                    <div className="imgcon">
                    <Link to={'/' + item.name}><img src={item.img} className="doughimg"/></Link>
                    </div>
                    <div className="iconcon">
                      <span class="material-icons icon">add_shopping_cart</span>
                      <Link to={'/' + item.name}><span className="doughname">{item.name}</span></Link>
                    </div>
                  </div>
                )
            } */}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home
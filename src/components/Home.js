import React from 'react';
import Layout from './Layout'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import img from '../img/ohtilly-F9uaJFH_j7Q-unsplash.jpg'
import homestyle from '../styles/homestyle.css'
import whitesimg from '../img/white-sprinkle.jpg'
import oldfimg from '../img/old-fashioned.jpg'
import pnkfimg from '../img/pink-sprinkle.jpg'
import sugarlyimg from '../img/sugarly.jpg'
import doughballimg from '../img/dughball.jpg'

const Home = ()=> {
 const [doughnut, buyDoughnut ]= useState(
  [
    {name: 'whitesprinkle', img: whitesimg, inCart: false},
    {name: 'oldfashioned', img: oldfimg, inCart: false},
    {name: 'pinksprinkle', img: pnkfimg, inCart: false},
    {name: 'sugarly', img: sugarlyimg, inCart: false},
    {name: 'doughball', img: doughballimg, inCart: false},
    {name: 'pinksprinkle', img: pnkfimg, inCart: false},
  ]
 );
  return (
    <Layout>
      <div className="container">
        <div className="img">
          <span>Doughnut Doughnut Doughnut!</span>
        </div>
        <p>Doughnut Collections</p>
        <div className="cartcontainer">
          <div className="flex">
          {
            doughnut.map(item=>
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
          }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
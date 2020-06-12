import React, { createContext } from 'react'
import whitesimg from '../img/white-sprinkle.jpg'
import oldfimg from '../img/old-fashioned.jpg'
import pnkfimg from '../img/pink-sprinkle.jpg'
import sugarlyimg from '../img/sugarly.jpg'
import doughballimg from '../img/dughball.jpg'

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  
  constructor() {
    super();
    this.state = {
      doughnut: [
        {name: 'whitesprinkle', img: whitesimg, inCart: false},
        {name: 'oldfashioned', img: oldfimg, inCart: false},
        {name: 'pinksprinkle', img: pnkfimg, inCart: false},
        {name: 'sugarly', img: sugarlyimg, inCart: false},
        {name: 'doughball', img: doughballimg, inCart: false},
        {name: 'pinksprinkle', img: pnkfimg, inCart: false},
      ]
    }
  }
    
  render() {
    return (
      <ThemeContext.Provider value={{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
};

export default ThemeContextProvider



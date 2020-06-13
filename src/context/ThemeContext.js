import React, { createContext } from 'react'
import whitesimg from '../img/white-sprinkle.png'
import oldfimg from '../img/old-fashioned.png'
import pnkfimg from '../img/pink-sprinkle.png'
import sugarlyimg from '../img/sugarly.png'
import doughballimg from '../img/chocolate-glazed.png'

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  
  constructor() {
    super();
    this.state = {
      doughnut: [
        {name: 'Whitesprinkle', img: whitesimg, inCart: false},
        {name: 'Oldfashioned', img: oldfimg, inCart: false},
        {name: 'Pinksprinkle', img: pnkfimg, inCart: false},
        {name: 'Sugarly', img: sugarlyimg, inCart: false},
        {name: 'Doughball', img: doughballimg, inCart: false},
        {name: 'Pinksprinkle', img: pnkfimg, inCart: false},
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



import React from 'react'
import { ThemeContext } from '../context/ThemeContext'

class Doughnut extends React.Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    return (
      <div></div>
    )
  }
}
export default Doughnut
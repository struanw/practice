import React from 'react'

import {appendWidget} from '../api'

export default class AddWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      mfg: '',
      inStock: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addWidget = this.addWidget.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addWidget (e) {
    appendWidget(this.state, this.props.finishAdd)
  }

  render () {
    return (
      <div className='add-widget'>
        <form>
          <p><input placeholder='Name' name='name'
            onChange={this.handleChange}
            value={this.state.name}
          /></p>
          <p><input placeholder='Price' name='price'
            onChange={this.handleChange}
            value={this.state.price}
          /></p>
          <p><input placeholder='Manufacturer' name='mfg'
            onChange={this.handleChange}
            value={this.state.mfg}
          /></p>
          <p><input placeholder='In stock' name='inStock'
            onChange={this.handleChange}
            value={this.state.inStock}
          /></p>
          <button type='button' onClick={this.addWidget}>Add widget</button>
          {' '}
          <a href='#' onClick={this.props.finishAdd}>Cancel</a>
        </form>
      </div>
    )
  }
}









// import React from 'react'
// import logo from '../cant_image.JPG'
// import second from '../can_image.JPG'
// import './App.css';
// //import styled from 'styled-components'


// class Background extends React.Component {

//   state = {
//     logoVisible: true,
//     sndImage: false
//   }

//   componentDidMount () {
//     setInterval(this.switch, 5000 )
//   }

//  switch = () => {
//   this.setState ({
//   logoVisible: !false,
//   sndImage: !true
// })
// }

// render () {
//     return (
//         <>
//             {this.state.logoVisible && <img className='Background' src={logo} alt='' />}
//             {this.state.sndImage && <img className='Background' src={second} alt='' />}
// <Cart visible={this.state.logoVisible} fn={this.function}/>
//         </> 
//       )





//     }
// }
// export default Background





// <div class="container"></div>​

// .container {
//     width: 150px;
//     height: 100px;
//     background-image: url("http://i.stack.imgur.com/2OrtT.jpg");
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: 50% 50%;
// }​
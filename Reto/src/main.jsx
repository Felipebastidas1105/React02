import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import Button from './Button'
import Random from './Random';

// class UI extends Component {
//   render(){
//     return(
//       <div>
//         <h1>Tu color es rgb</h1>
//         <Button light={true} />
//       </div>
//     )
//   }
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <UI /> */}
    <Random />
  </React.StrictMode>,
)

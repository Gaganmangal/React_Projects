import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <h1>Gagan Mangal</h1>
//   )
// }

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com/",
//     target: "_black",
//   },
//   children: "click to visit google",
// };

// const anotherreact = (
//   <a href="https://www.google.com/" target='_black'>Click</a>
// )

const react = React.createElement(
  'a',
  {href:'https://www.google.com/',target: '_blank'},
  'click me'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    
    // MyApp()
// anotherreact
  react
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/* createRoot method -> Points at an element in our HTML code.
document.getElementById('root') reaches out to the root from the index HTML file.
 
It calls the render method(from react). Then we pass some JSX code to render.
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
)

/* StrictMode -> Helps identify and fix errors in the 
code. It checks de code and warns us. */

/* The function App is being imported from the file App,
and it´s being used like a HTML element in the
JSX code below, which is passed to render. */
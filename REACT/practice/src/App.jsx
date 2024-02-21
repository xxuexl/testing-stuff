import React from 'react'
import Hello from './components/Hello';

// 1.El componente se define en una funcion
const App = () => {
  // 2. Memoria de datos. useState es el default value
  const [value, setValue] = React.useState('Alberto');
  // 3. Retorno de un jsx element
  return (
    <>
      <h4>{value}</h4>
      <input value={value} onChange={
          event => setValue(event.target.value)
        }
        ></input>
      <Hello/>
    </>
  )
}



export default App;
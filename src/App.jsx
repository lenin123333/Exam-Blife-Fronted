import { useEffect, useReducer } from 'react'
import Header from './components/Header'
import Products from './components/Products'
import { cartReducer, initialState } from "./reducers/cart-reducer"

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <>
     <Header cart={state.cart}dispatch={dispatch} />
     <Products  dispatch={dispatch}/>
    </>
  )
}

export default App

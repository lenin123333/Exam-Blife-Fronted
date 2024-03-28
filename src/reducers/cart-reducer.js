import { db } from "../data/db";

//Esta funcion revisa si tenemos un objeto en local sotorage y si no retorna un arreglo vacio
const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
}

export const initialState  = {
    data: db,
    cart: initialCart()
}

const MIN_ITEMS = 1
const MAX_ITEMS = 5

export const cartReducer = (
        state = initialState,
        action
    ) => {

    if(action.type === "add-to-cart" ) {
        //Se revisa si en el carrito se encuentra en el carrito un producto con el mismo id
        const itemExists = state.cart.find(product => product.id === action.payload.product.id)
        let updatedCart = []
        if (itemExists) { 
            // En caso de que se encuentre en el carrito
            //Recorre el arreglo que esta en el state y busca cual es
            //una vez encontrado le aunmenta el numero de productos
            //al final retorna un arreglo nuevo
            updatedCart = state.cart.map(item => {
                if(item.id === action.payload.product.id) {
                    if(item.quantity < MAX_ITEMS) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                } else {
                    return item
                }
           })
        } else {
            //en caso de que no exista creamos el objeto y le agreggamos el quantity
            const newItem = {...action.payload.product, quantity : 1}
            updatedCart = [...state.cart, newItem]
        }

        return {
            //en caso de que existe el producto retornamos una copia del state mas el producto
            ...state,
            cart: updatedCart
        }
    }

    if(action.type === 'remove-from-cart') {
        //remueve el produto seleccionado con el id que se le mando cuando se llamo
        const cart = state.cart.filter( item => item.id !== action.payload.id)
        return {
            ...state,
            cart
        }
    }

    if(action.type === 'decrease-quantity') {
        //La funcion para restar productos con el envio del id la llamada de la funcion
        //Recorremos el arreglo y buscamos el que sea igual al id que se le esta pasando
        //tambien comprobamos que no se reste mas de lo devido
        const cart = state.cart.map( item => {
            if(item.id === action.payload.id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })

        return {
            ...state,
            cart
        }
    }

    if(action.type === 'increase-quantity') {
        //La funcion para restar productos con el envio del id la llamada de la funcion
        //Recorremos el arreglo y buscamos el que sea igual al id que se le esta pasando
        //tambien comprobamos que no se sume mas de lo devido
        const cart = state.cart.map( item => {
            if(item.id === action.payload.id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        
        return {
            ...state,
            cart
        }
    }

    if(action.type === 'clear-cart') {
        //se limpiar el cart en blanco para vaciarlo
        return {
            ...state,
            cart: []
        }
    }

  
    return state
}
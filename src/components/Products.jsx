/* eslint-disable react/prop-types */
import { db } from "../data/db"
import Prodcut from "./Prodcut"
export default function Products({dispatch}) {
  return (
    <main className="flex flex-row p-10 space-x-14 justify-center">
      {
        //recorremos el arreglo donde tenemos los datos
        //Este suple a los datos reales si los obtuvieramos de una DB
        db.map(product=>(
          <Prodcut key={product.id} product={product} 
          dispatch={dispatch} />
        ))
      }
    </main>
  )
}

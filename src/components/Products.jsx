import { db } from "../data/db"
import Prodcut from "./Prodcut"
export default function Products() {
  return (
    <main className="flex flex-row p-10 space-x-14 justify-center">
      {
        db.map(product=>(
          <Prodcut key={product.id} product={product}/>
        ))
      }
    </main>
  )
}

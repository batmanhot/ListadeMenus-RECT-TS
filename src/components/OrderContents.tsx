import type { MenuItem, OrderItem } from '../type/index'
import { formatCurrency } from '../helpers/index'

type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id:MenuItem['id']) => void
}


export default function OrderContents({order, removeItem}: OrderContentsProps) {
  return (
    <div>
       <h2 className='font-black text-4xl'>ORDENES DE CONSUMO</h2>
       <div className='mt-10 space-y-5'>
        
        {order.map(item => (
            <div key={item.id} className='flex justify-between items-center border-t border-gray-200 last-of-type:border-b py-3'>
                <div>
                    <p>{item.name}</p>
                    {/* <p className='font-black'>{item.quantity} x ${item.price.toFixed(2)}</p> */}
                    <p className='font-black'>{item.quantity} x {formatCurrency(item.price)}</p>
                </div>
                <button className='bg-red-700 h-8 w-8 rounded-full text-white font-bold'
                    onClick={() => removeItem(item.id)}
                >X</button>
            </div>
        ))}

       </div> 
    </div>
  )
}

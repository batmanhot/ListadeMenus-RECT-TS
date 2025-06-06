import { useMemo } from 'react'
import type { OrderItem } from '../type'
import { formatCurrency } from '../helpers'

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}


export default function OrderTotals({order, tip, placeOrder }: OrderTotalsProps) {

     const subTotalAmount =  useMemo(() => 
       order.reduce( (total, item) => total + (item.price * item.quantity), 0 ), [order])

     const tipAmount = useMemo(() =>        
         subTotalAmount * tip, [tip, subTotalAmount])

     const totalAmount = useMemo(() => subTotalAmount + tipAmount,
         [subTotalAmount, tipAmount]);

  return (
    <>
        <div className=' space-y-3'> 
            <h2 className='font-black text-2xl'>Totales y Propinas: </h2>
            <p>Sub Total a pagar: {' '}
                <span className='font-bold'>{formatCurrency(subTotalAmount)}</span>
             </p>
             <p>Propinas: {' '}
                <span className='font-bold'> {formatCurrency(tipAmount)}</span>
             </p>
             <p>Total a Pagar:
                <span className='font-bold'> {formatCurrency(totalAmount)}</span>
             </p>
        </div>
        <button className='w-full bg-black p-3 uppercase text-white font-bold mt-18 disabled:opacity-50 hover:opacity-80 transition-all'
        disabled={totalAmount === 0}
        onClick={placeOrder}>         
          Guardar Ordenes</button>
    </>
  )
}

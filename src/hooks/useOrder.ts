import { useState } from "react"
import type { OrderItem, MenuItem } from "../type/index";


export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState<number>(0);
    

    const addItem = (item: MenuItem) => {
        // Check if the item already exists in the order
        const existingItem = order.find(orderItem => orderItem.id === item.id);
        if(existingItem) {
            // If it exists, update the quantity
            console.log("Updating item:", existingItem.name); 

            const updatedOrder = order.map(orderItem => 
                orderItem.id === item.id 
                ? {...orderItem, quantity: orderItem.quantity + 1} 
                : orderItem            
            );
            setOrder(updatedOrder);           
          }else {
              console.log("Adding item:", item.name);
              const NewItem = {...item, quantity: 1} 
              setOrder([...order, NewItem])
          }
    }

    const removeItem = (id: MenuItem['id']) => {
        console.log("Removing item ....", id);
        
        const deleteOrder = order.filter(item => item.id !== id);
        setOrder(deleteOrder)

    }

    const placeOrder = () => {
        setOrder([])
        setTip(0);

    } 

  return {
       order,
       tip,
       setTip,
       addItem,
       removeItem,
       placeOrder
  }
}
  
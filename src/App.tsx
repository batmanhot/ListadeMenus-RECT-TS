import { menuItems } from "./data/db"
import  MenuItem from "./components/MenuItem";
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";


function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();

  return (
    <>
    <header className="bg-teal-400 py-6">
      <h1 className="text-4xl font-black text-center">LISTA DE MENU DEL DIA</h1>
    </header>

    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <div className="p-5">
        <h2 className="text-4xl font-black">MENU</h2>
          <div className="space-y-3 mt-10">
              {menuItems.map(item => (

              <MenuItem
                key={item.id}
                item={item} 
                addItem={addItem}
                />

              // <div key={item.id} className="border-b border-gray-200 py-4">
              //   <h3 className="text-xl font-semibold">{item.name}</h3>
              //   <p className="text-gray-600">${item.price.toFixed(2)}</p>
              // </div>
            ))}

          </div>
        </div>
      <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10"> 
            {order.length > 0 ? (
              <>
               <OrderContents
                  order={order}
                  removeItem={removeItem}
                  />        

                <TipPercentageForm
                  setTip={setTip}
                  tip={tip}
                />

                <OrderTotals 
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />    
              </>
            
            ) : (
              <p className="font-bold text-center text-3xl">La orden esta vacia</p>        
            )}

      </div>      
      
    </main>
    </>
  )
}

export default App

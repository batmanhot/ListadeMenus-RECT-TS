import type { MenuItem } from '../type/index';

type MenuItemProps = {
    item: MenuItem,
    addItem:(item: MenuItem) => void
}


export default function MenuItem({item, addItem} : MenuItemProps)  {
    return (  
        <div>       
            <button 
            className='border-2 border-teal-400 p-4 w-full hover:bg-teal-400 flex justify-between rounded-2xl'
            onClick={() => addItem(item)}
            >
                <p>{item.name} </p>
                <p className='font-black'>{item.price} </p>        
            </button> 
        </div>
    );
}


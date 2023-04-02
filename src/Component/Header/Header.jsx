import React, { useState } from 'react';
import Link from './Link';

const Header = () => {
    const [open ,setOpen] = useState(false)
    let routes = [
        {id:1, path: "/", name: "Home"  },
        {id:2, path: "/items/:id", name: "ItemDetail"},
        {id:3, path: "/items", name: "ItemList"},
        {id:4, path: "/cart", name: "Cart" },
        {id:5, path: "/checkout", name: "Checkout" }
      ]
    return (
        <div className='bg-slate-400'>
            <span className="md:hidden "  onClick={()=>setOpen(!open)}>
                <span>{open == false?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            }</span>
             

          </span>
            <ul className={`md:flex bg-slate-400 absolute md:static duration-300 ${open? 'top-16':'-top-96'}`}>
               
               {
                routes.map(route=><Link 
                    key={route.id}
                    route ={route}>

                    </Link>)
               }
            </ul>
        </div>
    );
};

export default Header;
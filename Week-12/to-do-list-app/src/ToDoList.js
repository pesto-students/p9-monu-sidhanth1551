import React from "react";
import { useEffect } from 'react';


const ToDoList = (pageProps) => {
    
    //This usEffect is to scrollDown automatically when the list gets extended and scrollbar gets added.
    useEffect(()=> {
        const container  = document.querySelector(".listBlock");
        container.scrollTop=container.scrollHeight;
    
      },[pageProps.list])
    
    return (
        <>
                <div className='listStyle'>
                <input type='checkbox' 
                onClick={()=>{
                pageProps.onSelect(pageProps.id)
                }}></input>
                <i class="bi bi-x-lg"></i>
                <li>{pageProps.text}</li>
             </div>
        </>


    )
}

export default ToDoList;
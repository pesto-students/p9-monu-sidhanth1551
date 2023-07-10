import React, { useState } from "react";
import './Content.css'
import axios from 'axios'
import ShortLinks from "./ShortLinks";
import { useSelector, useDispatch } from 'react-redux'
import { setListBox, setTextInBox } from "./features/links/linkSlice";
import { store } from "./app/store";

const Content = ()=> {
     
      //  const [text , setText] = useState('');
        
      const text = useSelector((store)=>store.links.text);
        const list = useSelector((store)=>store.links.listBox);
        const dispatch = useDispatch();

     const handleChange = (event)=> {
       // setText(event.target.value)
       dispatch(setTextInBox(event.target.value))
     }
    
    const callApi = async()=> {
  
        const res = await axios.get("https://api.shrtco.de/v2/shorten?url="+text);
             const newObj = {
                link:text,
                shortLink:res.data.result.short_link
            }
            dispatch(setListBox({newObj}))
    }


     return (
         
        <>
           <div className="Box1st">
                   <div className="InputBox">
                          <input type='text' placeholder="Shorten a link here..." value={text} onChange={handleChange}></input>
                          <button type="submit" onClick={()=>callApi()}>Shorten It!</button>
                   </div>
             <ShortLinks
             list={list}
             />
           </div>
        </>
     );

}

export default Content;
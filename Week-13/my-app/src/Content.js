import React, { useState } from "react";
import './Content.css'
import axios from 'axios'
import ShortLinks from "./ShortLinks";

const Content = ()=> {
     
        const [text , setText] = useState('');

        const [list , setList] = useState([]);


     const handleChange = (event)=> {
        console.log(event.target.value)
        setText(event.target.value)
     }
    
    const callApi = async()=> {
  
        const res = await axios.get("https://api.shrtco.de/v2/shorten?url="+text);
        console.log(res.data.result);
        setList((old)=>{
            const newObj = {
                link:text,
                shortLink:res.data.result.short_link
            }
            return [...old,newObj]
        })
        setText('')
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
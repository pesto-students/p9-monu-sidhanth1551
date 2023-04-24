import React from "react";
import './ShortLinks.css'

const shortLinks = (props)=> {

  const copyClipboard = (getText)=> {

    return navigator.clipboard.writeText(getText);

  }

    return (
        <> 
        {props.list.map((card,index)=> {
            {console.log(card)}
            return (
            <div className="shortDivs1">
               <div className="shortDivs2">
                 <p>{card.link}</p>
                 <div className="shortDivs3">
                  <p id="slink" value="n">{card.shortLink}</p>
                  <button type="submit" onClick={()=>copyClipboard(card.shortLink)}>Copy</button>
                 </div>
               </div>
             </div>
            )
        })}

        </>
    )
}


export default shortLinks;
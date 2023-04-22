import {useState } from 'react';
import './app.css'
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  //This state is to handle text written in the box
  const [text, setText] = useState('');
  //This state is to handle list
  const [list, setList] = useState([]);
  
  //Function to update text when clicked on ADD button
  const handleText = (event)=> {
        console.log(event.target.value)
        setText(event.target.value);
  }
  
  //Function to update the list when added or removed items   
  const editList = () => {
        setList((old)=> {
          return [...old,text]
        });
        setText('')
  }

 //Function when clicked on checkbox item to remove
  const checkedItem = (id) => {
     console.log(id,'delete')
     setList((old)=> {
       return old.filter((arrElement, index)=> {
        return index!==id;
       })
     })
  }
   

  return (
    <div className="mainBlock" >
        
        <div className='centerBlock'>  
         
           <h1>To do List !</h1>

          <input type='text' placeholder='Enter a Item' value={text} onChange={handleText}></input>
          <br></br>
          <button onClick={editList}> Add </button>
             <div className="listBlock">
             <ul>
              {list?.map((item,index)=>{
                return <> 

                <ToDoList
                onSelect={checkedItem}
                id={index}
                text={item}
                key={uuidv4()}
                />
                </>
               })}
               </ul>
             </div>
        </div>

    </div>
  );
}

export default App;

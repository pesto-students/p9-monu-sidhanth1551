import React, { useEffect} from "react";
import "./App.css";
import { useSelector, useDispatch } from 'react-redux'
import { changeLightWord, turnSwitch } from "./features/button/buttonSlice";


const Room = () => {
  
  const isOn = useSelector((store)=>store.button.isOn);
  const lightedness=useSelector((store)=>store.button.lightedness);

  const dispatch = useDispatch();

 
  useEffect(() => {
    dispatch(changeLightWord())
  }, [isOn,dispatch]);

  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={() => {
        console.log('a')
        dispatch(turnSwitch())
      }
      }>flip</button>
    </div>
  );
};

export default Room;

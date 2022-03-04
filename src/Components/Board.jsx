import { useState } from "react"
import {checkWinner,renderSquare,handleClick} from "./checkWinner";

export const Board =()=>{
    const [sqa,setSqa] = useState(Array(9).fill(null));
    const [xTrue,setXTrue] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);

    const style ={
        width:'200px',
        height:'200px',
        margin:'0%',
        padding:'0',
        display:'grid',
        gridTemplateColumns: 'auto auto auto',
        gridGap:'0',
        
        border:'1px solid black'
    }

 

  const winner = checkWinner(sqa);

    return (
        <>
        <h2>{winner ?`Winner : ${winner}` :`Next Player :${xTrue ? "X":"O"}`} </h2>
            <div style={style}>
                {renderSquare(0,sqa,handleClick,setXTrue,setSqa,xTrue,setStepNumber)}
                {renderSquare(1,sqa,handleClick,setXTrue,setSqa,xTrue,setStepNumber)}
                {renderSquare(2,sqa,handleClick,setXTrue,setSqa,xTrue,setStepNumber)}
                {renderSquare(3,sqa,handleClick,setXTrue,setSqa,xTrue,setStepNumber)}
                {renderSquare(4,sqa,handleClick,setXTrue,setSqa,xTrue,setStepNumber)}
                {renderSquare(5,sqa,handleClick,setXTrue,setSqa,xTrue,setStepNumber)}
                {renderSquare(6,sqa,handleClick,setXTrue,setSqa,xTrue,setStepNumber)}
                {renderSquare(7,sqa,handleClick,setXTrue,setSqa,xTrue,setStepNumber)}
                {renderSquare(8,sqa,handleClick,setXTrue,setSqa,xTrue,setStepNumber)}
                
               
            </div>

        </>
    )
}
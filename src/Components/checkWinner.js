import { Square } from "./Square"

function checkWinner (square){
    const lines = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]    
    ];
    for(let i=0;i<lines.length;i++){
        let [a,b,c] = lines[i];
        if(a!==null && (square[a]===square[b]) && (square[a]===square[b]) && (square[a]===square[c])){
            //console.log(square[a],a,i,lines[i])
            return square[a];
        }
    }
    return null;
}

function renderSquare(i,sqa,handleClick,setXTrue,setSqa,xTrue,setStepNumber) {
    return (
      <Square
        value={sqa[i]}
        onClick={() => handleClick(i,setXTrue,setSqa,xTrue,sqa,setStepNumber)}
      />
    );
  }
  const handleClick = (i,setXTrue,setSqa,xTrue,sqa,setStepNumber)=>{
    if (checkWinner(sqa) || sqa[i]) {
        //console.log(checkWinner(sqa))
        return;
      }
      //console.log(sqa);
    const newSqua = sqa.slice();
    newSqua[i] = xTrue ? "X":"O";
    setSqa(newSqua);
    setXTrue(!xTrue);
    if (checkWinner(sqa) || sqa[i]) {
      //console.log(checkWinner(sqa))
      return;
    }
}
export  {checkWinner,
    renderSquare,
    handleClick};
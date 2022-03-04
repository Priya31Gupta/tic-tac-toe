

export const Square = ({value,onClick})=>{
   
    const style={
        fontSize:'20px',
        padding:'0',
        margin:'0',
        fontWeight:'400',
        backgroundColor:'#35858B',
        color:'#F4DFBA'
    }

    return (
        <>
            <button style={style} onClick={onClick} >{value}</button>
        </>
    )
}
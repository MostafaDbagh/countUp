const Increment = ()=>{
    return{
        type:'Increment'
    }
}
const IncrementByvalue = (n)=>{
    return{
        type:'Value',
        payload:n
    }
}
const Decrement = ()=>{
    return{
        type:'Decrement'
    }
}
const IncremntAsync = (n)=>{
    return dispatch=>{
        setTimeout(() => {
            dispatch(IncrementByvalue(n))
        }, 3000);
    }
}

export  {
    Increment,
    IncrementByvalue,
    Decrement,
    IncremntAsync
}






const Reducer = (state=0,action)=>{

switch(action.type)
{
    case "Increment":
                    return state+1;
    case "Decrement":
               return state-1;
    case "Value":
               return state + +action.payload;
    case "Async":
               return state + +action.payload;
     default :return state;
}
}

export default Reducer;

const TransactionReducer=((state, action)=>{
    switch(action.Type){
        case 'ADD':{
            return [action.payload, ...state]
        }
        default:
            return state;
    }
})
export default TransactionReducer;
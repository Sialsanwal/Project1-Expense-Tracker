import {createContext} from 'react';
import TransactionReducer from './transReducer';

const initialTransaction = [
    { amount: 500, desc: "Cash" },
    { amount: -40, desc: "Book" },
    { amount: -200, desc: "Camera" },
]

 export const TransactionContext= createContext(initialTransaction)


 export const TransactionProvider= ({})=>{
 let [state, dispatch] = useReducer(TransactionReducer,initialTransaction)

 }
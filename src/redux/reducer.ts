import {sub , add} from 'date-fns'

export const intialstate ={
    month: new Date()
}


export const changemonthreducer=(state=intialstate , action:any)=>{
    switch(action.type){
        case "CHANGE_MONTH_PREVIOUS":
            return{
                ...state,
                month: sub(action.payload, { months: 1 })
            }

        case "CHANGE_MONTH_FARWARD":
            return{
                 ...state,
                    month: add(action.payload, { months: 1 })
            }
            case "CHANGE_YEAR_FARWARD":
                return{
                     ...state,
                        month: add(action.payload, { years: 1 })
                }    
                case "CHANGE_YEAR_PREVIOUS":
                    return{
                         ...state,
                            month:sub(action.payload, { years: 1 })
                    }    
        default:
               return state 
    }
}




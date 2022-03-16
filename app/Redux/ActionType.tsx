export const IncNum=(value: any)=>{

    return{
        type:"INCREMENT",
        payload: value
    }
}

export const DecNum=()=>{

    return{
        type:"DECREMENT",
    }
}
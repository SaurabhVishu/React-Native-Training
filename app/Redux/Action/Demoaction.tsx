export const IncNum=(value: any)=>{
// console.log(value,'value')
    return{
        type:"INCREMENT",
        payload: value
    }
}

export const changeSate=(value:any)=>{
// console.log(value,"value")
    return{
        type:"ChangeState",
        payload: value
    }
}


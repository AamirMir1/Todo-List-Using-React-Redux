export const addItems = (data)=>{
    return {
        type: "ADDITEM",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const deleteItem = (id)=>{
    return {
        type: "DELETEITEM",
        id
    }
}
export const removeAllItems = ()=>{
    return {
        type: "REMOVEALLITEMS"
    }
}
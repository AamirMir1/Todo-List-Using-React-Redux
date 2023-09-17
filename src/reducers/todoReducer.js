const initialState = {
    list: []
}

const todoReducer = (state = initialState, action) => {
    if (action.type === "ADDITEM") {
        const { data, id } = action.payload
        return {
            ...state,
            list: [
                ...state.list,
                {
                    data: data,
                    id: id
                }
            ]
        }
    }
    else if (action.type === "DELETEITEM") {
        const newData = state.list.filter((elem) => elem.id !== action.id)
        return {
            ...state,
            list: newData

        }
    }
    else if (action.type === "REMOVEALLITEMS") {
        return {
            ...state,
            list: []
        }
    }
    else {
        return state
    }
}

export default todoReducer;
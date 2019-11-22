const initialState = {
    multipleData: []
}


const multipleDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'MULTIPLE_DATA':
            return {multipleData: action.payload};
        default:
            return state;
    }
}

export default multipleDataReducer;
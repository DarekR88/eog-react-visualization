const initialState = {
    selectedMetric: ''
}

const selectorReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SELECTOR':
            return {selectedMetric: action.payload};
        default:
            return state;
    }
}

export default selectorReducer;
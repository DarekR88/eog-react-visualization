const initialState = {
    selectedMetrics: []
};

const activeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ACTIVE':
            return {selectedMetrics: [...state.selectedMetrics, action.payload]}
        default:
            return state;
    }
}

export default activeReducer;
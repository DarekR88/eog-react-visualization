const initialState = {
    selectedMetrics: [{}]
};

const activeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ACTIVE':
            return  {selectedMetrics: [...state.selectedMetrics, action.payload]}
        case 'REMOVE': 
            return ({
                selectedMetrics: state.selectedMetrics.filter(element => element.metricName !== action.payload)
            })
        default:
            return state;
    }
}

export default activeReducer;
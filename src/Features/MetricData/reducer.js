const initialState = {
    metricData: []
}


const metricDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'METRIC_DATA':
            return {metricData: action.payload};
        default:
            return state;
    }
}

export default metricDataReducer;
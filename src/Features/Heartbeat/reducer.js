const initialState = {
    current: 0,
    past: 0
}


const heartbeatReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TIMESTAMP':
            return {
                current: action.payload,
                past: action.payload - 1800000
            };
        default:
            return state;
    }
}

export default heartbeatReducer;
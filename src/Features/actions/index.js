export const selector = () => {
    return {
        type: 'SELECTOR'
    }
}

export const timestamp = () =>{
    return {
        type: 'TIMESTAMP'
    }
}

export const data = () => {
    return {
        type: 'METRIC_DATA'
    }
}

export const multipleData = () => {
    return {
        type: 'MULTIPLE_DATA'
    }
}

export const activeMetrics = () => {
    return {
        type: 'ACTIVE'
    }
}
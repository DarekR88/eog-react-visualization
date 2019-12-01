import { reducer as weatherReducer } from '../Features/Weather/reducer';
import { reducer as heartBeatReducer } from '../Features/Heartbeat/sliceReducer'
import { reducer as activeMetrics } from '../Features/ActiveMetrics/sliceReducer'
import { reducer as multipleReducer } from '../Features/MultipleMetrics/sliceReducer'

 
export default {
  weather: weatherReducer,
  multipleData: multipleReducer,
  activeMetrics: activeMetrics,
  heartbeat: heartBeatReducer
};
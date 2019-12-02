import { reducer as weatherReducer } from '../Features/Weather/reducer';
import { reducer as heartBeatReducer } from '../Features/Heartbeat/sliceReducer'
import { reducer as activeMetrics } from '../Features/ActiveMetrics/sliceReducer'
import { reducer as multipleReducer } from '../Features/MultipleMetrics/sliceReducer'
import { reducer as subReducer } from '../Features/Subscription/reducer';

 
export default {
  weather: weatherReducer,
  multipleData: multipleReducer,
  activeMetrics: activeMetrics,
  heartbeat: heartBeatReducer,
  subData: subReducer
};
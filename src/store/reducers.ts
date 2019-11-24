import { reducer as weatherReducer } from '../Features/Weather/reducer';
import selectorReducer from '../Features/Selector/reducer';
import heartbeatReducer from '../Features/Heartbeat/reducer';
import multipleReducer from '../Features/MultipleMetrics/reducer';
import activeReducer from '../Features/ActiveMetrics/reducer';
 
export default {
  weather: weatherReducer,
  selector: selectorReducer,
  heartbeat: heartbeatReducer,
  multipleData: multipleReducer,
  activeMetrics: activeReducer,
};
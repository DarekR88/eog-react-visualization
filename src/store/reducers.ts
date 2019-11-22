import { reducer as weatherReducer } from '../Features/Weather/reducer';
import selectorReducer from '../Features/Selector/reducer';
import heartbeatReducer from '../Features/Heartbeat/reducer';
import metricDataReducer from '../Features/MetricData/reducer';
import multipleReducer from '../Features/MultipleMetrics/reducer';
 
export default {
  weather: weatherReducer,
  selector: selectorReducer,
  heartbeat: heartbeatReducer,
  metricData: metricDataReducer,
  multipleData: multipleReducer
};

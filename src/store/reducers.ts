import { reducer as weatherReducer } from '../Features/Weather/reducer';
import { reducer as heartBeatReducer } from '../Features/Heartbeat/sliceReducer'
import { reducer as activeMetrics } from '../Features/ActiveMetrics/sliceReducer'
import { reducer as multipleReducer } from '../Features/MultipleMetrics/sliceReducer'
import { reducer as subReducer } from '../Features/Subscription/reducer';
import { reducer as waterTempReducer } from '../Features/WaterTemp/reducer';
import { reducer as injValveReducer } from '../Features/InjValve/reducer';
import { reducer as oilTempReducer } from '../Features/OilTemp/reducer';
import { reducer as flareTempReducer } from '../Features/flareTemp/reducer';
import { reducer as casingPReducer } from '../Features/CasingPressure/reducer';
import { reducer as tubingPReducer } from '../Features/TubingPressure/reducer';

 
export default {
  weather: weatherReducer,
  multipleData: multipleReducer,
  activeMetrics: activeMetrics,
  heartbeat: heartBeatReducer,
  subData: subReducer,
  injValve: injValveReducer,
  oilTemp: oilTempReducer,
  waterTemp: waterTempReducer,
  flareTemp: flareTempReducer,
  casingPressure: casingPReducer,
  tubingPressure: tubingPReducer
};
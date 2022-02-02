import AirstripZone from './zone-airstrip';
import LoadingZone from './zone-loading';
import OutsideZone from './zone-outside';
import SortZone from './zone-sort';
import WarehouseZone from './zone-warehouse';

//export each type of zone
export type Zone =
  AirstripZone
  | LoadingZone
  | OutsideZone
  | SortZone
  | WarehouseZone;

//Cards import
import JanitorCard from '../cards/card-janitor';
import ManagerCard from '../cards/card-manager';
import SortCard from '../cards/card-sort';
//Zones import
import SortZone from '../zones/zone-sort';
import WarehouseZone from '../zones/zone-warehouse';

//Door7 (between SortZone and WarehouseZone)  -  It's opposite to Door6
//Class can pass all cards in variable "passingCardTypes"
export class Door7 {
  passingCardTypes = [
    SortCard, 
    ManagerCard, 
    JanitorCard
  ];

  //Variables where you enter and which room you leave
  enterZone: SortZone;
  leavingZone: WarehouseZone;
  
  //Constructor
  constructor(enterZone: SortZone, leavingZone: WarehouseZone) {
    this.enterZone = enterZone;
    this.leavingZone = leavingZone;
  }
}

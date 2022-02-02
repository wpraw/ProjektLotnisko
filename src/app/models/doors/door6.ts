//Cards import
import JanitorCard from '../cards/card-janitor';
import ManagerCard from '../cards/card-manager';
import SortCard from '../cards/card-sort';
//Zones import
import SortZone from '../zones/zone-sort';
import WarehouseZone from '../zones/zone-warehouse';

//Door6 (between WarehouseZone and SortZone)  -  It's opposite to Door7
//Class can pass all cards in variable "passingCardTypes"
export class Door6 {
  passingCardTypes = [
    SortCard, 
    ManagerCard, 
    JanitorCard
  ];

  //Variables where you enter and which room you leave
  enterZone: WarehouseZone;
  leavingZone: SortZone;
  
  //Constructor
  constructor(enterZone: WarehouseZone, leavingZone: SortZone) {
    this.enterZone = enterZone;
    this.leavingZone = leavingZone;
  }
}

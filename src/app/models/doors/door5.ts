//Cardss import
import AirstripCard from '../cards/card-airstrip';
import JanitorCard from '../cards/card-janitor';
import ManagerCard from '../cards/card-manager';
//Zones import
import AirstripZone from '../zones/zone-airstrip';
import SortZone from '../zones/zone-sort';

//Door5 (between AirstripZone and SortZone)  -  It's opposite to Door4
//Class can pass all cards in variable "passingCardTypes"
export class Door5 {
  passingCardTypes = [
    AirstripCard, 
    ManagerCard, 
    JanitorCard
  ];

  //Variables where you enter and which room you leave
  enterZone: AirstripZone;
  leavingZone: SortZone;
  
  //Constructor
  constructor(enterZone: AirstripZone, leavingZone: SortZone) {
    this.enterZone = enterZone;
    this.leavingZone = leavingZone;
  }
}
//Cards import
import AirstripCard from '../cards/card-airstrip';
import JanitorCard from '../cards/card-janitor';
import ManagerCard from '../cards/card-manager';
import SortCard from '../cards/card-sort';
//Zones import
import LoadingZone from '../zones/zone-loading';
import SortZone from '../zones/zone-sort';

//Door2 (between LoadingZone and SortZone)  -  It's opposite to Door3
//Class can pass all cards in variable "passingCardTypes"
export class Door2 {
  passingCardTypes = [
    SortCard, 
    AirstripCard, 
    ManagerCard, 
    JanitorCard
  ];

  //Variables where you enter and which room you leave
  enterZone: LoadingZone;
  leavingZone: SortZone;
  
  //Constructor
  constructor(enterZone: LoadingZone, leavingZone: SortZone) {
    this.enterZone = enterZone;
    this.leavingZone = leavingZone;
  }
}
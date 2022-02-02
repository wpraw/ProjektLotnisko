//Cards import
import AirstripCard from '../cards/card-airstrip';
import JanitorCard from '../cards/card-janitor';
import ManagerCard from '../cards/card-manager';
//Zones import
import AirstripZone from '../zones/zone-airstrip';
import SortZone from '../zones/zone-sort';

//Door4 (between SortZone and AirstripZone)  -  It's opposite to Door5
//Class can pass all cards in variable "passingCardTypes"
export class Door4 {
  passingCardTypes = [
    AirstripCard,
    ManagerCard, 
    JanitorCard
  ];

  //Variables where you enter and which room you leave
  enterZone: SortZone;
  leavingZone: AirstripZone;

  //Constructor
  constructor(enterZone: SortZone, leavingZone: AirstripZone) {
    this.enterZone = enterZone;
    this.leavingZone = leavingZone;
  }
}
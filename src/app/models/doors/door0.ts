//Cards import
import AirstripCard from '../cards/card-airstrip';
import JanitorCard from '../cards/card-janitor';
import ManagerCard from '../cards/card-manager';
import TransportCard from '../cards/card-transport';
import SortCard from '../cards/card-sort';
//Zones import
import OutsideZone from '../zones/zone-outside';
import LoadingZone from '../zones/zone-loading';

//Door0 (between LoadingZone and OutsideZone)  -  It's opposite to Door1
//Class can pass all cards in variable "passingCardTypes"
export class Door0 {
  passingCardTypes = [
    SortCard,
    AirstripCard,
    TransportCard,
    ManagerCard,
    JanitorCard,
  ];

  //Variables where you enter and which room you leave
  enterZone: LoadingZone;
  leavingZone: OutsideZone;

  //Constructor
  constructor(enterZone: LoadingZone, leavingZone: OutsideZone) {
    this.enterZone = enterZone;
    this.leavingZone = leavingZone;
  }
}

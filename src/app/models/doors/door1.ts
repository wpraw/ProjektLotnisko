//Cards import
import AirstripCard from '../cards/card-airstrip';
import JanitorCard from '../cards/card-janitor';
import ManagerCard from '../cards/card-manager';
import TransportCard from '../cards/card-transport';
import SortCard from '../cards/card-sort';
//Zones import
import OutsideZone from '../zones/zone-outside';
import LoadingZone from '../zones/zone-loading';

//Door1 (between OutsideZone and LoadingZone)  -  It's opposite to Door0
//Class can pass all cards in variable "passingCardTypes"
export class Door1 {
  passingCardTypes = [
    SortCard,
    AirstripCard,
    TransportCard,
    ManagerCard,
    JanitorCard,
  ];

  //Variables where you enter and which room you leave
  enterZone: OutsideZone;
  leavingZone: LoadingZone;

  //Constructor
  constructor(enterZone: OutsideZone, leavingZone: LoadingZone) {
    this.enterZone = enterZone;
    this.leavingZone = leavingZone;
  }
}

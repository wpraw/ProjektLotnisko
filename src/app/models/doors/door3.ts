//Cards import
import AirstripCard from '../cards/card-airstrip';
import JanitorCard from '../cards/card-janitor';
import ManagerCard from '../cards/card-manager';
import SortCard from '../cards/card-sort';
//Zones import
import LoadingZone from '../zones/zone-loading';
import SortZone from '../zones/zone-sort';

//Door3 (between SortZone and LoadingZone)  -  It's opposite to Door2
//Class can pass all cards in variable "passingCardTypes"
export class Door3 {
    passingCardTypes: [
        SortCard,
        AirstripCard,
        ManagerCard,
        JanitorCard,
    ];

    //Variables where you enter and which room you leave
    enterZone: SortZone;
    leavingZone: LoadingZone;

    //Constructor
    constructor(enterZone: SortZone, leavingZone: LoadingZone) {
        this.enterZone = enterZone;
        this.leavingZone = leavingZone;
    }
}
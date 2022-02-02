import AirstripCard from '../cards/card-airstrip';
import JanitorCard from '../cards/card-janitor';
import ManagerCard from '../cards/card-manager';
import { Worker } from '../worker';

export default class AirstripZone {
  public static zone: 'AirstripZone';
  roomLimit: Number = 3;

  //cards usable in the zone
  card = [
    AirstripCard, 
    JanitorCard, 
    ManagerCard
  ];
  //array with current workers inside zone
  currentWorkers: Worker[] = [];

}

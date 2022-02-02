import TransportCard from '../cards/card-transport';
import AirstripCard from '../cards/card-airstrip';
import JanitorCard from '../cards/card-janitor';
import ManagerCard from '../cards/card-manager';
import SortCard from '../cards/card-sort';
import { Worker } from '../worker';

export default class OutsideZone {
  public static zone: 'OutsideZone';
  roomLimit: Number = 100000000;

  //cards usable in the zone
  card = [AirstripCard, JanitorCard, ManagerCard, SortCard, TransportCard];
  //array with current workers inside zone
  currentWorkers: Worker[] = [];

}

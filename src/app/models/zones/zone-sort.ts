import AirstripCard from '../cards/card-airstrip';
import JanitorCard from '../cards/card-janitor';
import ManagerCard from '../cards/card-manager';
import SortCard from '../cards/card-sort';
import { Worker } from '../worker';

export default class SortZone {
  public static zone: 'SortZone';
  roomLimit: Number = 7;

  //cards usable in the zone
  card = [AirstripCard, JanitorCard, ManagerCard, SortCard];
  //array with current workers inside zone
  currentWorkers: Worker[] = [];
}
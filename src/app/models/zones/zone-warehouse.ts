import JanitorCard from '../cards/card-janitor';
import ManagerCard from '../cards/card-manager';
import SortCard from '../cards/card-sort';
import { Worker } from '../worker';

export default class WarehouseZone {
  public static zone: 'WarehouseZone';
  roomLimit: Number = 3;

  //cards usable in the zone
  card = [JanitorCard, ManagerCard, SortCard];
  //array with current workers inside zone
  currentWorkers: Worker[] = [];
}

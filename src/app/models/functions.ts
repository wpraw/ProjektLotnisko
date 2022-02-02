import JanitorCard from './cards/card-janitor';
import ManagerCard from './cards/card-manager';
import AirstripZone from './zones/zone-airstrip';

import { Worker } from './worker';
import { Door } from './doors/door';
import { Zone } from './zones/zone';


//initiated by doors
export function passThrough(worker: Worker, door: Door): boolean | undefined {
  if (!door.leavingZone.currentWorkers.includes(worker)) {
    return undefined;
  }

//if worker can enter zone, he is added to new zone
  if (canEnterZone(worker, door)) {
    removeWorkerFromZone(worker, door.leavingZone); //worker deleted from old zone
    return true;
  }
  return false;
}

//function to remove worker from zone by index
function removeWorkerFromZone(worker: Worker, zone: Zone): void {
  var array = zone.currentWorkers;
  var specificWorker = array.find(i => i.id === worker.id);
  let id = worker.id;
  if (specificWorker.id === id) {
    var index = array.indexOf(worker)
    array.splice(index, 1);
  }
}

//checker if worker can enter the zone
function addWorkerToZone(worker: Worker, zone: Zone): boolean {
  let result = zone.card.map(a => a.card);
  if (result.find(x => x === worker.workerCard.toString())){
    if (zone.currentWorkers.length < zone.roomLimit || //checking limit 
        worker.workerCard === ManagerCard.card &&
        zone.card["Airstrip"] != AirstripZone.zone)
    {
      zone.currentWorkers.push(worker);
      return true;
    } 
    else 
    {
      console.error('too many workers in this zone');
      return false;
    }
  } 
  else {
    console.error('Not authorized', worker);
    return false;
  }
}

//function checking if room is not empty for janitor 
function canEnterZone(worker: Worker, door: Door) : boolean {
  if (
    worker.workerCard === JanitorCard.card &&
    door.enterZone.currentWorkers.length === 0
  ) {
    console.error('janitor was blocked - no one in zone');
    return false;
  }

  return addWorkerToZone(worker, door.enterZone);
}

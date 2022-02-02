import { Worker } from './models/worker';
import { workers } from './workers';

import OutsideZone from './models/zones/zone-outside';
import LoadingZone from './models/zones/zone-loading';
import SortZone from './models/zones/zone-sort';
import WarehouseZone from './models/zones/zone-warehouse';
import AirstripZone from './models/zones/zone-airstrip';

import { Door0 } from './models/doors/door0';
import { Door1 } from './models/doors/door1';
import { Door2 } from './models/doors/door2';
import { Door3 } from './models/doors/door3';
import { Door5 } from './models/doors/door5';
import { Door4 } from './models/doors/door4';
import { Door6 } from './models/doors/door6';
import { Door7 } from './models/doors/door7';
import { passThrough } from './models/functions';

//class tester works independately from GUI
export class Tester {
  workers: Worker[] = workers;
  outsideZone = new OutsideZone;
  loadingZone = new LoadingZone;
  sortZone = new SortZone;
  warehouseZone = new WarehouseZone;
  airStripZone = new AirstripZone;

  //creating instances of doors
  door0 = new Door0(this.loadingZone, this.outsideZone);
  door1 = new Door1(this.outsideZone, this.loadingZone);
  door2 = new Door2(this.loadingZone, this.sortZone);
  door3 = new Door3(this.sortZone, this.loadingZone);
  door4 = new Door4(this.sortZone, this.airStripZone);
  door5 = new Door5(this.airStripZone, this.sortZone);
  door6 = new Door6(this.warehouseZone, this.sortZone);
  door7 = new Door7(this.sortZone, this.warehouseZone);

  //constructor is taking existing workers from file and pushing them into an array of outside zone
  constructor() {
    this.workers.forEach((worker) => {
      this.outsideZone.currentWorkers.push(worker);
    });

    console.log('Move worker from outside zone to loading zone.');

    passThrough(this.workers[3], this.door0);
    passThrough(this.workers[7], this.door0);
    passThrough(this.workers[8], this.door0);
    passThrough(this.workers[9], this.door0);
    passThrough(this.workers[10], this.door0);

    this.printZoneWorkers();

    //
    console.log('Move worker from loading zone into sort zone');

    passThrough(this.workers[3], this.door3);
    passThrough(this.workers[4], this.door3);

    this.printZoneWorkers();

    console.log('Move worker from outside zone to loading zone.');

    passThrough(this.workers[4], this.door0);

    this.printZoneWorkers();

    console.log('Move worker from sort zone into outside zone');

    passThrough(this.workers[10], this.door1);

    this.printZoneWorkers();

    //
    console.log('Move worker from sort zone into warehouse zone | max 3 people in Airstrip');

    passThrough(this.workers[7], this.door3);
    passThrough(this.workers[8], this.door3);
    passThrough(this.workers[9], this.door3);

    passThrough(this.workers[7], this.door5);
    passThrough(this.workers[8], this.door5);
    passThrough(this.workers[9], this.door5);

    this.printZoneWorkers();
    //
    console.log('Transport Worker will not pass into Sort zone because he has no permission');

    passThrough(this.workers[11], this.door0);
    passThrough(this.workers[11], this.door3);

    this.printZoneWorkers();

    console.log( 'Doors will not pass Janitor if in the Zone there is no other worker');

    passThrough(this.workers[1], this.door0);
    passThrough(this.workers[1], this.door3);
    passThrough(this.workers[1], this.door6);

    this.printZoneWorkers();
  }

  private printZoneWorkers(): void {
    console.log('outsideZone', this.outsideZone.currentWorkers);
    console.log('loadingZone', this.loadingZone.currentWorkers);
    console.log('sortZone', this.sortZone.currentWorkers);
    console.log('magazyn', this.warehouseZone.currentWorkers);
    console.log('airStripZone', this.airStripZone.currentWorkers);
  }
}

import { Component } from '@angular/core';
import { Door } from './models/doors/door';
import { Door0 } from './models/doors/door0';
import { Door1 } from './models/doors/door1';
import { Door2 } from './models/doors/door2';
import { Door3 } from './models/doors/door3';
import { Door4 } from './models/doors/door4';
import { Door5 } from './models/doors/door5';
import { Door6 } from './models/doors/door6';
import { Door7 } from './models/doors/door7';
import { passThrough } from './models/functions';
import { Worker } from './models/worker';
import { Zone } from './models/zones/zone';
import AirstripZone from './models/zones/zone-airstrip';
import LoadingZone from './models/zones/zone-loading';
import OutsideZone from './models/zones/zone-outside';
import SortZone from './models/zones/zone-sort';
import WarehouseZone from './models/zones/zone-warehouse';
import { Tester } from './tester';
import { workers } from './workers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  workers: Worker[];
  outsideZone: OutsideZone;
  loadingZone: LoadingZone;
  sortZone: SortZone;
  warehouseZone: WarehouseZone;
  airStripZone: AirstripZone;
  door0: Door0;
  door1: Door1;
  door2: Door2;
  door3: Door3;
  door4: Door4;
  door5: Door5;
  door6: Door6;
  door7: Door7;

  constructor() {
    new Tester();

    this.workers = workers;
    this.outsideZone = new OutsideZone();
    this.loadingZone = new LoadingZone();
    this.sortZone = new SortZone();
    this.warehouseZone = new WarehouseZone();
    this.airStripZone = new AirstripZone();

    this.door0 = new Door0(this.loadingZone, this.outsideZone);
    this.door1 = new Door1(this.outsideZone, this.loadingZone);
    this.door2 = new Door2(this.loadingZone, this.sortZone);
    this.door3 = new Door3(this.sortZone, this.loadingZone);
    this.door4 = new Door4(this.sortZone, this.airStripZone);
    this.door5 = new Door5(this.airStripZone, this.sortZone);
    this.door6 = new Door6(this.warehouseZone, this.sortZone);
    this.door7 = new Door7(this.sortZone, this.warehouseZone);

    this.workers.forEach((worker) => {
      this.outsideZone.currentWorkers.push(worker);
    });
  }

  
  public onDoorClick(doorId: number, zone: Zone): void {
    let door: Door = this[`door${doorId}`];
    const radioBtn: any = document.querySelector(
      `input[name='${zone['zone']}']:checked`
    );
    if (!radioBtn) {
      return;
    }
    
    const worker = zone.currentWorkers.find(
      (x) => x.workerId === +radioBtn.value
    );
    const canPass = passThrough(worker, door);
    if (canPass != undefined) {
      if (canPass) {
      } else {
        alert("worker couldn't pass - check console");
      }
    }
  }
}

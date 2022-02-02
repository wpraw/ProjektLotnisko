import { Component, Input } from '@angular/core';
import { Zone } from '../models/zones/zone';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css'],
})
export class WorkerListComponent {
  @Input() zone: Zone;
  constructor() {}
}

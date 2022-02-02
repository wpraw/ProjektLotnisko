import AirstripCard from './cards/card-airstrip';
import JanitorCard from './cards/card-janitor';
import ManagerCard from './cards/card-manager';
import TransportCard from './cards/card-transport';
import SortCard from './cards/card-sort';
import { Card } from './cards/card';

interface IWorker {
  id: number;
  name: string;
  surname: string;
  workerCard: Card;
}

//Export all Workers and their Cards with min and max ids 
export class Worker implements IWorker {
  id: number;
  workerCard: Card;

  set workerId(id: number) {
    let cardId_min: number;
    let cardId_max: number;
    switch (this.workerCard) {
      case AirstripCard.card:
        cardId_min = AirstripCard.cardId_min;
        cardId_max = AirstripCard.cardId_max;
        this.workerCard = AirstripCard.card;
        break;
      case JanitorCard.card:
        cardId_min = JanitorCard.cardId_min;
        this.workerCard = JanitorCard.card;
        break;
      case ManagerCard.card:
        cardId_min = ManagerCard.cardId_min;
        cardId_max = ManagerCard.cardId_max;
        this.workerCard = ManagerCard.card;
        break;
      case SortCard.card:
        cardId_min = SortCard.cardId_min;
        cardId_max = SortCard.cardId_max;
        this.workerCard = SortCard.card;
        break;
      case TransportCard.card:
        cardId_min = TransportCard.cardId_min;
        cardId_max = TransportCard.cardId_max;
        this.workerCard = TransportCard.card;
        break;
    }

    if (id >= cardId_min && (!cardId_max || (cardId_max && id <= cardId_max))) {
      this.id = id;
    } 
    else {
      console.error(
        `Wrong worker id: ${id} for given card type: ${this.workerCard}`
      );
    }
  }

  get workerId(): number {
    return this.id;
  }

  name: string;
  surname: string;

  constructor(obj: IWorker) {
    this.workerCard = obj.workerCard;
    Object.assign(this, obj);
  }
}

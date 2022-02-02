import AirstripCard from './models/cards/card-airstrip';
import JanitorCard from './models/cards/card-janitor';
import ManagerCard from './models/cards/card-manager';
import TransportCard from './models/cards/card-transport';
import SortCard from './models/cards/card-sort';
import { Worker } from './models/worker';

//Example Workers from Exercise
export const workers: Worker[] = [
  new Worker({
    id: 22,
    name: 'Remigiusz',
    surname: 'Mazurek',
    workerCard: ManagerCard.card,
  }),
  new Worker({
    id: 1128,
    name: 'Kornel',
    surname: 'Chmielewski',
    workerCard: JanitorCard.card,
  }),
  new Worker({
    id: 1032,
    name: 'Marcel',
    surname: 'Malinowski',
    workerCard: JanitorCard.card,
  }),
  new Worker({
    id: 230,
    name: 'Dobromił',
    surname: 'Baran',
    workerCard: SortCard.card,
  }),
  new Worker({
    id: 412,
    name: 'Alex',
    surname: 'Ostrowski',
    workerCard: SortCard.card,
  }),
  new Worker({
    id: 351,
    name: 'Amir',
    surname: 'Woźniak',
    workerCard: SortCard.card,
  }),
  new Worker({
    id: 254,
    name: 'Gniewomir',
    surname: 'Wróblewski',
    workerCard: SortCard.card,
  }),
  new Worker({
    id: 123,
    name: 'Dorian',
    surname: 'Kowalski',
    workerCard: AirstripCard.card,
  }),
  new Worker({
    id: 107,
    name: 'Maurycy',
    surname: 'Sokołowski',
    workerCard: AirstripCard.card,
  }),
  new Worker({
    id: 186,
    name: 'Ariel',
    surname: 'Szczepański',
    workerCard: AirstripCard.card,
  }),
  new Worker({
    id: 187,
    name: 'Andrzej',
    surname: 'Piela',
    workerCard: AirstripCard.card,
  }),
  new Worker({
    id: 665,
    name: 'Cezary',
    surname: 'Kaźmierczak',
    workerCard: TransportCard.card,
  }),
  new Worker({
    id: 725,
    name: 'Błażej',
    surname: 'Szulc',
    workerCard: TransportCard.card,
  }),
];

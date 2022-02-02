import AirstripCard from "./card-airstrip";
import JanitorCard from "./card-janitor";
import ManagerCard from "./card-manager";
import SortCard from "./card-sort";
import TransportCard from "./card-transport";

//Exported types of Cards
export type Card =  
ManagerCard 
| SortCard 
| AirstripCard 
| TransportCard 
| JanitorCard;
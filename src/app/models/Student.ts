import { Injectable } from "@angular/core";
import { Model } from "./Model";

@Injectable({
  providedIn: 'root'
})
export class Student extends Model {
  name  : string|undefined;
  email : string|undefined;
  age   : number|undefined;
}

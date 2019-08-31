import { Injectable } from '@angular/core';
import {Search} from './search'
// import{}

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
 search=Search

  constructor() { }
}

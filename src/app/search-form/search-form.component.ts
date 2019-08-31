import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import {Repository} from '../repository'
// import { Search } from '../search';
// import{SearchServiceService} from '../search-service.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  username:string; 
 answer:any;

  // @Input() githubUser: Search;
  // @Output() userUpdated: EventEmitter<Search> = new EventEmitter<Search>();

  constructor(private http:HttpClient) {

   }

  ngOnInit() {
  }
search(){
this.http.get('https://api.github.com/users/'+ this.username +"?access_token=4a5502cd664dd7cb15b98c867b5685845dabf573")
.subscribe((answer)=> {

this.answer=answer;
console.log(this.answer)
})
}
}

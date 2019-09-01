import { Component, OnInit  } from '@angular/core';
import {Repository} from '../repository'
// import { Search } from '../search';
import { HttpClient } from '@angular/common/http'
import {GitRequestService} from '../git-http/git-request.service';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
username:string; 
 answer:any;
 repos:any;
 public githubUser:string;

  constructor(private http:HttpClient,private service:GitRequestService ) {

   }

  ngOnInit() {
  }
search(){
  // this service.GitRequest
this.http.get('https://api.github.com/users/'+ this.username +"?access_token=4a5502cd664dd7cb15b98c867b5685845dabf573").subscribe((answer)=> {

this.answer=answer;
})
}
}

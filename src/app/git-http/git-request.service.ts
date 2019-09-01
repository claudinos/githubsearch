import { Injectable } from '@angular/core';
import { Search } from '../search';
import { HttpClient } from '@angular/common/http';
import {environment}from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GitRequestService {
search=Search;
  constructor(private http:HttpClient) { 
    GitRequestService
  }
}
// ApiRequest(){
// interface ApiResponse{
//   login:string;
//   name:string;
//    bio:string;
//    location:string;
//    avatar_url:string;
//    created_at:Date;
// }
// let promise = new Promise((resolve,reject)=>{
//   this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
//     // this.quote.quote = response.quote
//     // this.quote.author = response.author

//     resolve()
//   },
//   error=>{
//     // this.quote.quote = "Never, never, never give up"
//     // this.quote.author = "Winston Churchill"

//     reject(error)
//   })
// })
// return promise
// }
// }

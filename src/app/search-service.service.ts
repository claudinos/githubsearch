// import { Injectable } from '@angular/core';
// import {Search} from './search'
// import { User } from './user';
// import {Repository} from './repository'
// import { from } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import{environment} from '../environments/environment'

// @Injectable({
//   providedIn: 'root'
// })
// export class SearchServiceService {
//  user:User;
//  userName:string;
//  answer:string;
//  repository:Repository[];
 

//   constructor(private http:HttpClient) {
//     this.user=new User("","","","","",new Date());
//    }
// githubUser(userName){

//   interface ApiResponse{
//     login:string;
//     name:string;
//      bio:string;
//      location:string;
//      avatar_url:string;
//      created_at:Date;
//   }
//   let promise = new Promise((resolve,reject)=>{
//     this.http.get<ApiResponse>('https://api.github.com/users/'+ userName + "?access_token=" + environment.apiUrl).toPromise().then(answer=>{
//       this.user.login = answer.login
//       this.user.name = answer.name
//       this.user.bio = answer.bio
//       this.user.location = answer.location
//       this.user.avatar_url = answer.avatar_url
//       this.user. created_at = answer. created_at
   
//       resolve()
//     },
//     error=>{
    
//       this.user.login = "invalid login"
//       reject(error)
//     })
//   })
//   return promise
//   }
  
// }
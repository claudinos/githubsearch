import { Component, OnInit,Input } from '@angular/core';
import {User} from '../user';
import { HttpClient } from '@angular/common/http';
import {Repository} from '../repository'

@Component({
  selector: 'app-git-pro',
  templateUrl: './git-pro.component.html',
  styleUrls: ['./git-pro.component.css']
})
export class GitProComponent implements OnInit {
  githubUser: User;
 
  constructor(private http:HttpClient) { }

  ngOnInit() {
    // interface ApiResponse{
    // login:string;
    // name:string;
    //  bio:string;
    //  location:string;
    //  avatar_url:string;
    //  created_at:Date
    //  public_repos:number;

    // }
    // this.http.get<ApiResponse>("https://api.github.com/users/claudinos?access_token=4a5502cd664dd7cb15b98c867b5685845dabf573").subscribe(data=>{
     
    //   this.githubUser = new User(data.login,data.name, data.bio ,data.location,data.avatar_url, data.created_at)

    // })
  }

}


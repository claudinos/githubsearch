import { Component, OnInit,Input } from '@angular/core';
import {User} from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git-pro',
  templateUrl: './git-pro.component.html',
  styleUrls: ['./git-pro.component.css']
})
export class GitProComponent implements OnInit {
  @Input() githubUser: User;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse{
     name:string;
     bio:string;
     location:string;
     avatar_url:string;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token=4a5502cd664dd7cb15b98c867b5685845dabf573").subscribe(data=>{
     
      this.githubUser = new User(data.name, data.bio ,data.location,data.avatar_url)
    })
  }

}


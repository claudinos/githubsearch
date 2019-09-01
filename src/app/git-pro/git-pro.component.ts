import { Component, OnInit,Input } from '@angular/core';
import {User} from '../user';
import { HttpClient } from '@angular/common/http';
import {Repository} from '../repository'
import {GitRequestService} from '../git-http/git-request.service'



@Component({
  selector: 'app-git-pro',
  templateUrl: './git-pro.component.html',
  styleUrls: ['./git-pro.component.css']
})
export class GitProComponent implements OnInit {
  public githubUser:string;
  user:any;
  repo:any;
  // gitSearch:GitSearch;


 
  constructor(private http:HttpClient,private service:GitRequestService) { 
  }

  ngOnInit() {
  }


}

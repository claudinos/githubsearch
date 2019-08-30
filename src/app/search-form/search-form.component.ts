import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { Search } from '../search';
import{SearchServiceService} from '../search-service.service'
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Input() githubUser: Search;
  @Output() userUpdated: EventEmitter<Search> = new EventEmitter<Search>();

  constructor(private githubService: SearchServiceService) { }

  ngOnInit() {
  }

}

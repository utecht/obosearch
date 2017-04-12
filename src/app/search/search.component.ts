import { Component, OnInit } from '@angular/core';
import { Result } from '../result';
import { MOCK_RESULTS } from '../result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private results: Result[];

  constructor() { }

  ngOnInit() {
      this.results = MOCK_RESULTS;
  }

}

import { query } from '@angular/animations';
import { MovieApiService } from './../../movie-api.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchResult: any[] = [];


  constructor(private movieApiService:MovieApiService){}

  searchQuery(form: NgForm){
    console.log(form.value)
    this.movieApiService.movieSearch(form.value.query).subscribe(
      (response) => {
        console.log(response)
        this.searchResult = response.results;
        console.log(this.searchResult)
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      })

  }

}

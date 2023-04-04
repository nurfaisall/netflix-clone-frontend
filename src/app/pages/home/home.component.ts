import { HttpErrorResponse } from '@angular/common/http';
import { MovieApiService } from './../../movie-api.service';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  bannerResult: any[]= [];
  trendingResult: any[] = [];

 ngOnInit(): void {
  this.bannerData();
  this.trendingData();
}

constructor(private movieApiService:MovieApiService){}

bannerData() {
  this.movieApiService.bannerApiData().subscribe((response) => {
    this.bannerResult = response.results;
    console.log(this.bannerResult)
  },
    (error: HttpErrorResponse) => {
      alert(error.message)
    }
  )
}

trendingData(){
  this.movieApiService.trendingApiData().subscribe((response) => {
    this.trendingResult = response.results;
    console.log(this.trendingResult),
    (error: HttpErrorResponse) => {
      alert(error.message)
    }
  })
}
}

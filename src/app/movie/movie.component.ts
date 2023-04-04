import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieApiService } from './../movie-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{

  movieDetail:any = {};

  token:String | null = '';

  constructor(private movieApiService: MovieApiService,private activateRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.token = this.activateRoute.snapshot.paramMap.get('id');
    this.getMovie(this.token);
  }

  getMovie(id :String | null){
    this.movieApiService.movieDetail(id).subscribe(
      (response) =>{
        this.movieDetail = response;
        console.log(this.movieDetail);
      }
    )
  }

}

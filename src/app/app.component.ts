import { HttpErrorResponse } from '@angular/common/http';
import { MovieApiService } from './movie-api.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify-clone';

  navbarColor: any;

  constructor(private movieApiServiceService: MovieApiService) { }





  // change background navbar while scrolling
  // @HostListener('document:scroll')
  // scroll() {
  //   console.log(document.documentElement.scrollTop)

  //   if (document.documentElement.scrollTop >= 1) {
  //     this.navbarColor = true
  //   }
  //   else {
  //     this.navbarColor = false
  //   }
  // }

}

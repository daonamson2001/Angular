import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/moive/movie.model';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie = new Movie();

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovieDetail(this.route.snapshot.params['id']);
  }

  getMovieDetail(id:any) {
    this.apiService.getMovieDetail(id)
      .subscribe((res:any)=>{
      this.movie = res
    })
  }

}

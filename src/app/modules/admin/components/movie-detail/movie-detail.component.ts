import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/moive/movie.model';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie!: Movie;
  id!: number;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.movie = new Movie();
    this.id = this.route.snapshot.params['id'];
  
    this.getMovieDetail(this.id)
  }

  getMovieDetail(id:any) {
    this.apiService.getMovieDetail(id)
      .subscribe((res:any)=>{
      this.movie = res
    })
  }

  onSubmit() {
    this.updateMovie(this.id, this.movie);
    this.reload(this.id)
  }

  updateMovie(id:any, movie:Movie) {
    this.apiService.updateMovie(id, movie)
      .subscribe(data => {
        console.log(data)
      })
    this.movie = new Movie();
  }

  reload(id:any) {
    this.getMovieDetail(id);
    this.router.navigate(['/admin/movie-detail/' + id]);
  }

  detele() {
    this.deleteMovie(this.id);
    this.router.navigate(['/admin/admin-list'])
  }

  deleteMovie(id:any) {
    this.apiService.deleteMovie(id)
      .subscribe(data => {console.log(id)})
  }

}

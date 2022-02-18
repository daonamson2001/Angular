import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Movie } from 'src/app/models/moive/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  movie!: Movie;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.movie = new Movie();
  }

  onSubmit() {
    this.createMovie(this.movie);
    this.router.navigate(['/admin/admin-list']);
  }

  createMovie(movie:Movie) {
    this.apiService.createMovie(movie)
      .subscribe(data => console.log(data));
    this.movie = new Movie();
  }

}

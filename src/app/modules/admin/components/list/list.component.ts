import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/moive/movie.model';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movies: Movie[] = [];
  movie!: Movie;
  id!: number;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getListMoive()
  }

  getListMoive() {
    this.apiService.getListMoive()
      .subscribe((res:any)=>{
      this.movies = res
    })
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

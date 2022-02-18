import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/moive/movie.model';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movies: Movie[] = [];  

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getListMoive()
  }
  
  getListMoive() {
    this.apiService.getListMoive()
      .subscribe((res:any)=>{
      this.movies = res
    })
  }
  
}

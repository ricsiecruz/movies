import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  data: any;

  constructor(private app: AppService) {}

  ngOnInit() {
    this.app.getMovies().subscribe(res => {
      this.data = res;
    })
  }
  
  add(item: any) {
    item.watchlist = !item.watchlist;

    this.app.watchlist(item).subscribe(response => {
      console.log('Updated successfully', response);
    });
  }
  
  remove(item: any) {
    item.watchlist = false;
  
    this.app.watchlist(item).subscribe(response => {
      console.log('Updated successfully', response);
    });
  }
  
  sortByTitle() {
    if (this.data) {
      this.data.sort((a: any, b: any) => a.title.localeCompare(b.title));
    }
  }

  sortByDate() {
    if (this.data) {
      this.data.sort((a: any, b: any) => {
        return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
      });
    }
  }
}

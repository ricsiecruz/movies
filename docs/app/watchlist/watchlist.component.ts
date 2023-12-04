import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent {
  data: any;

  constructor(private app: AppService) {}

  ngOnInit() {
    this.app.getMovies().subscribe(res => {
      this.data = res;
      console.log('Data length:', this.data.length);
    })
  }
  
  remove(item: any) {
    item.watchlist = false;
  
    this.app.watchlist(item).subscribe(response => {
      console.log('Updated successfully', response);
    });
  }

  hasWatchlistItems(): boolean {
    return this.data && this.data.some((item: { watchlist: any; }) => item.watchlist);
  }

}

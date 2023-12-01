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
      console.log('res', res)
    })
  }
}

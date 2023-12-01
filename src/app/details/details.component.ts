import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  data: any;
  safeUrl?: SafeResourceUrl;

  constructor(
    private app: AppService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id)
    })
  }

  getById(id: number) {
    this.app.getMovieDetails(id).subscribe((res) => {
      this.data = res;
      this.data.trailer = `https://www.youtube.com/embed/${res.trailer}`
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.trailer);
      console.log('details', res, this.data.trailer, this.data.genre)
    })
  }
}
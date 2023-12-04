import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() rating: number = 0;
  @Input() maxRating: number = 10;

  get filledStars(): number {
    return Math.floor(this.rating);
  }

  get stars(): number[] {
    return Array(this.maxRating).fill(0).map((_, index) => index + 1);
  }
}

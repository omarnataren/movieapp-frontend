import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-movie',
  imports: [],
  templateUrl: './formMovie.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormMovie { }

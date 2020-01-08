import { Component } from '@angular/core';
import { Model } from './repository.model';
@Component({
  selector: 'app-root',
  templateUrl: './template.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public model: Model = new Model();
}

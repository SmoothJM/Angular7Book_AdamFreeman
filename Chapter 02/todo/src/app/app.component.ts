import {Component} from '@angular/core';
import {Model, TodoItem} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItem() {
    return this.model.item.filter(item => !item.done);
  }

  addItem(value: string) {
    if (value !== '') {
      const newItem = new TodoItem(value, false);
      this.model.item.push(newItem);
    } else {
      alert('Empty item!');
    }
  }
}

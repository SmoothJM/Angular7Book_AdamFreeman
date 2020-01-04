// const model = {
//   user: 'Jim',
//   item: [
//     {action: 'Buy Flowers', done: false},
//     {action: 'Get Shoes', done: false},
//     {action: 'Buy Eggs', done: true},
//     {action: 'Smoke', done: true}]
// };

export class Model {
  user: string;
  item: any;

  constructor() {
    this.user = 'Jim';
    this.item = [new TodoItem('Buy Flowers', false),
      new TodoItem('Get Shoes', false),
      new TodoItem('Buy Eggs', true),
      new TodoItem('Smoke', true)
    ];
  }
}

export class TodoItem {
  action: string;
  done: boolean;

  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}

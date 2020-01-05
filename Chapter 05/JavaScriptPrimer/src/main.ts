// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
//
// if (environment.production) {
//   enableProdMode();
// }
//
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// import {Name, WeatherLocation} from './modules/NameAndWeather';
import * as NAW from './modules/NameAndWeather';
import { TempConverter } from '../tempCoverter';

class MyClass {
  // name1: string;
  // weather1: string;

  constructor(private name1, private weather1) {
    // this.name1 = name;
    // this.weather1 = this.weather;
  }

  set weather(value) {
    this.weather1 = value;
  }

  get weather() {
    return this.weather1;
  }

  printMessages() {
    console.log('Hello ' + this.name1 + '.');
    this.weather = 'rain';
    console.log('Today is ' + this.weather + '.');
  }
}

// let myData = new MyClass('Jim', 'sunny');
// myData.printMessages();

// let name = new NAW.Name('Jim', 'Deng');
// let loc = new NAW.WeatherLocation('raining', 'La Crosse');
// console.log(name.nameMessage);
// console.log(loc.weatherMessage);

const cTemp = TempConverter.convertFtoC(75);
console.log(cTemp);

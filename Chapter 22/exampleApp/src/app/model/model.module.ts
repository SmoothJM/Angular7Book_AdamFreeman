import { NgModule } from '@angular/core';
// import { StaticDataSource } from './static.datasource';
import { REST_URL, RestDataSource } from './rest.datasource';
import { Model } from './repository.model';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  providers: [
    Model,
    // StaticDataSource
    RestDataSource,
    {provide: REST_URL, useValue: `http://${location.hostname}:3500/products`}
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule
  ]
})
export class ModelModule {

}











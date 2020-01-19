import { NgModule } from '@angular/core';
// import { StaticDataSource } from './static.datasource';
import { REST_URL, RestDataSource } from './rest.datasource';
import { Model } from './repository.model';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {ModelResolver} from './model.resolver';

@NgModule({
  providers: [
    Model,
    // StaticDataSource
    RestDataSource,
    {provide: REST_URL, useValue: `http://${location.hostname}:3500/products`},
    ModelResolver
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule
  ]
})
export class ModelModule {

}











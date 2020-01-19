import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from './product.model';
import { catchError, delay } from 'rxjs/operators';

export const REST_URL = new InjectionToken('rest_url');

@Injectable()
export class RestDataSource {

  constructor(private http: HttpClient,
              @Inject(REST_URL) private url: string) {  }

  getData(): Observable<Product[]> {
    // return this.http.jsonp<Product[]>(this.url, 'callback');
    return this.sendRequest<Product[]>('GET', this.url);
    // return this.http.get<Product[]>(this.url);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.sendRequest<Product>('POST', this.url, product);
    // return this.http.post(this.url, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.sendRequest<Product>('PUT', `${this.url}/${product.id}`, product);
    // return this.http.put(`${this.url}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.sendRequest<Product>('DELETE', `${this.url}/${id}`);
    // return this.http.delete(`${this.url}/${id}`);
  }

  private sendRequest<T>(verb: string, url: string, body?: Product): Observable<T> {
    let headerOptions = new HttpHeaders();
    headerOptions = headerOptions.set( 'Access-Key', '<secret>');
    headerOptions = headerOptions.set( 'Application-Name', ['exampleApp', 'Jim']);
    return this.http.request<T>(verb, url, {
      body: body,
      headers: headerOptions
    })
      .pipe(delay(500))
      .pipe(catchError((error: Response) =>
      throwError(`Jim says: Network Error: ${error.statusText} (${error.status})`)
    ));
  }
}













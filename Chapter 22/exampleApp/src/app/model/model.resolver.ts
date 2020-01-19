import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Model} from './repository.model';
import {RestDataSource} from './rest.datasource';
import {Product} from './product.model';
import {MessageService} from '../messages/message.service';
import {Message} from '../messages/message.model';

@Injectable()
export class ModelResolver {
  constructor(
    private model: Model,
    private dataSource: RestDataSource,
    private messageService: MessageService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Product[]> {
    if (this.model.getProducts().length == 0) {
      this.messageService.reportMessage(new Message('Loading data...',false));
      return this.dataSource.getData();
    }
  }
}









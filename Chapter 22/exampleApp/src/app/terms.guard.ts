import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { MessageService } from './messages/message.service';
import { Message } from './messages/message.model';

@Injectable()
export class TermsGuard {

  constructor(private message: MessageService,
              private router: Router) {  }

  canActivate(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Promise<boolean> | boolean {
    if (route.params['mode'] == 'create') {
      return new Promise<boolean>((resolve,reject )=> {
        let responses: [string, (string) => void][] = [
          ['yep', () => resolve(true)],
          ['不', () => resolve(false)]
        ];
        this.message.reportMessage(new Message('Do you accept the terms?',
          false, responses))
      });
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Promise<boolean> | boolean {
    if (route.url.length > 0 && route.url[route.url.length-1].path == 'categories') {
      return new Promise<boolean>((resolve,reject )=> {
        let responses: [string, (string) => void][] = [
          ['yep', () => resolve(true)],
          ['不', () => resolve(false)]
        ];
        this.message.reportMessage(new Message('Do you want to see category component?',
          false, responses))
      });
    } else {
      return true;
    }
  }



}

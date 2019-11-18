import { Component, OnChanges } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Actions from './store/store.actions';
import { IAppState } from './store/root.reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  config: Observable<any>;

  constructor(private store: Store<IAppState>){
    this.config = store.select('app');
  }

  setUrl(){
    this.store.dispatch(new Actions.Registration('http://localhost/Panatracker.Portal'));
  }
}

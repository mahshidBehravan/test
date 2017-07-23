import { Component } from '@angular/core';
import { Lead } from './share/model/lead';
import { AppState } from './share/model/app.state';
import { leadReducer } from './share/reducers/lead.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
//const initialState: Lead[] = [];


//const leadAction = {
//    type: 'Add-Lead',
//    payload: <Lead>{

//        id: 1,
//        businessName: 'test',
//        businessCategory: 'cat1',
//        contactName: 'contact',
//        email: 'mahshid'

//    }
//}
//const changeState: Lead[] = leadReducer(initialState, leadAction);
//expect(initialState.length).toBeLessThan(changeState.length);

@Component({
  selector: 'my-app',
  template: `<button (click)="start()"></button>`,
})
export class AppComponent  {
    name = 'Angular';
    private id = 0;
    lead = {} as Lead;
    leads : Observable<Lead[]>;
    constructor(private store: Store<AppState>) { this.leads = this.store.select(state => state.lead); }

        start(){
            this.store.dispatch({
                type: 'ADD_LEAD',
                payload: <Lead>{
                    id: 1,
                    businessName: 'test',
                    businessCategory: 'cat1',
                    contactName: 'contact',
                    email: 'mahshdid'

                }
            })
        }

    }




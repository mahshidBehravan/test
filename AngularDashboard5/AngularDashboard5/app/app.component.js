"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
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
var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
        this.name = 'Angular';
        this.id = 0;
        this.lead = {};
        this.leads = this.store.select(function (state) { return state.lead; });
    }
    AppComponent.prototype.start = function () {
        this.store.dispatch({
            type: 'ADD_LEAD',
            payload: {
                id: 1,
                businessName: 'test',
                businessCategory: 'cat1',
                contactName: 'contact',
                email: 'mahshdid'
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<button (click)=\"start()\"></button>",
    }),
    __metadata("design:paramtypes", [store_1.Store])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
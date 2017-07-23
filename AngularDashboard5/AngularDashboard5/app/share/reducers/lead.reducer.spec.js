"use strict";
var lead_reducer_1 = require("./lead.reducer");
describe('lead reducer', function () {
    it('should add lead to list', function () {
        var initialState = [];
        var leadAction = {
            type: 'Add-Lead',
            payload: {
                id: 1,
                businessName: 'test',
                businessCategory: 'cat1',
                contactName: 'contact',
                email: 'mahshdid'
            }
        };
        var changeState = lead_reducer_1.leadReducer(initialState, leadAction);
        expect(initialState.length).toBeLessThan(changeState.length);
    });
});
//# sourceMappingURL=lead.reducer.spec.js.map
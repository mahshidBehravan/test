"use strict";
exports.Add_LEAD = 'Add-LEAD';
exports.Remove_LEAD = 'Remove_LEAD';
function leadReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case exports.Add_LEAD:
            return state.concat([action.payload]);
        case exports.Remove_LEAD:
            return state.filter(function (Lead) { return Lead.id !== action.payload.id; });
        default:
            return state;
    }
}
exports.leadReducer = leadReducer;
//# sourceMappingURL=lead.reducer.js.map
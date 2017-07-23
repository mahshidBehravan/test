import { Lead} from '../model/lead'
import { Action } from '@ngrx/store';

export const Add_LEAD = 'Add-LEAD';
export const Remove_LEAD = 'Remove_LEAD';
export function leadReducer(state: Lead[] = [], action: Action) {
    switch (action.type) {
        case Add_LEAD:
            return [...state, action.payload];
        case Remove_LEAD:
            return state.filter(Lead => Lead.id !== action.payload.id);
        default:
            return state;
    }
}
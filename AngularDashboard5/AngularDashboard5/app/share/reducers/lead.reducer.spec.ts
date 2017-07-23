import { Lead } from '../model/lead'
import { leadReducer } from './lead.reducer'

describe('lead reducer', () => {
    it('should add lead to list', () => {
        const initialState: Lead[] = [];

        const leadAction = {
            type: 'Add-Lead',
            payload: <Lead>{

                id: 1,
                businessName: 'test',
                businessCategory: 'cat1',
                contactName: 'contact',
                email:'mahshdid'
                
            }
        }
        const changeState: Lead[] = leadReducer(initialState, leadAction);
        expect(initialState.length).toBeLessThan(changeState.length);
    })

})
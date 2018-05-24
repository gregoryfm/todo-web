import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Study Redux',
        list: [{
            _id: 1,
            description: 'Pay credit card',
            done: true,
        }, {
            _id: 2,
            description: 'Meeting with team at 10:00 am',
            done: false,
        }, {
            _id: 3,
            description: 'Medical appointment on tuesday after lunch',
            done: false,
        }]
    })
});

export default rootReducer;
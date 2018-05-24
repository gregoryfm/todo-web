const INITIAL_STATE = {
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
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload };
        default:
            return state;
    }
}
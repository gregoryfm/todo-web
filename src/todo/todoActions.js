import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
});

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description;
        const search = description ? `&description__regex=/${description}/` : '';

        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))
    }
}

export const add = description => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch( clear() ))
            .then(resp => dispatch( search() ));
    }
}

export const markAsDone = task => {
    return dispatch => {
        axios.put(`${URL}/${task._id}`, { ...task, done: true })
            .then(resp => dispatch( search() ));
    }
}

export const markAsPending = task => {
    return dispatch => {
        axios.put(`${URL}/${task._id}`, { ...task, done: false })
            .then(resp => dispatch( search() ))
    }
}

export const remove = task => {
    return dispatch => {
        axios.delete(`${URL}/${task._id}`)
            .then(resp => dispatch( search() ));
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR', }, search() ];
}

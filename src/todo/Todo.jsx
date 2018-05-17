import React from 'react';
import axios from 'axios';

import PageHeader from '../layout/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { description: '', list: [] };

        this.refresh();
    }

    refresh() {
        axios
            .get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({ ...this.state, list: resp.data }));
    }

    handleAdd() {
        axios
            .post(URL, { description: this.state.description })
            .then(res => this.refresh());
    }

    handleChange( event ) {
        this.setState({ ...this.state, description: event.target.value });
    }

    handleRemove( task ) {
        console.log(task);
        axios
            .delete(`${URL}/${task._id}`)
            .then(res => this.refresh());
    }

    render() {
        return (
            <div>
                <PageHeader name="Tasks" small="Register" />
                <TodoForm 
                    description={this.state.description}
                    handleAdd={() => this.handleAdd()}
                    handleChange={event => this.handleChange(event)} />
                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove.bind(this)} />
            </div>
        )
    }
}

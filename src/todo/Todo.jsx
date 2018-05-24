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

    refresh( description = '' ) {
        const search = description ? `&description__regex=/${description}/` : '';
        axios
            .get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({ ...this.state, description, list: resp.data }));
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
            .then(res => this.refresh( this.state.description ));
    }

    handleMarkAsDone( task ) {
        axios
            .put(`${URL}/${task._id}`, { ...task, done: true })
            .then(res => this.refresh( this.state.description ));
    }

    handleMarkAsPending( task ) {
        axios
            .put(`${URL}/${task._id}`, { ...task, done: false })
            .then(res => this.refresh( this.state.description ));
    }

    handleSearch() {
        this.refresh( this.state.description );
    }

    render() {
        return (
            <div>
                <PageHeader name="Tasks" small="Register" />
                <TodoForm 
                    description={this.state.description}
                    handleAdd={() => this.handleAdd()}
                    handleChange={event => this.handleChange(event)} 
                    handleSearch={() => this.handleSearch()}/>
                <TodoList 
                    handleRemove={this.handleRemove.bind(this)}
                    handleMarkAsDone={this.handleMarkAsDone.bind(this)}
                    handleMarkAsPending={this.handleMarkAsPending.bind(this)} />
            </div>
        )
    }
}

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
    }

    handleAdd() {
        axios
            .post(URL, { description: this.state.description })
            .then(res => console.log("it works"));
    }

    handleChange( event ) {
        this.setState({ ...this.state, description: event.target.value });
    }

    render() {
        return (
            <div>
                <PageHeader name="Tasks" small="Register" />
                <TodoForm 
                    description={this.state.description}
                    handleAdd={() => this.handleAdd()}
                    handleChange={event => this.handleChange(event)} />
                <TodoList />
            </div>
        )
    }
}

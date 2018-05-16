import React from 'react';
import PageHeader from '../layout/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends React.Component {

    handleAdd() {
        console.log(this);
    }

    render() {
        return (
            <div>
                <PageHeader name="Tasks" small="Register" />
                <TodoForm handleAdd={this.handleAdd.bind(this)} />
                <TodoList />
            </div>
        )
    }
}

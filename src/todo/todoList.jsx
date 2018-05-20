import React from 'react';
import IconButton from '../layout/IconButton';

export default props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(task => (
            <tr key={task._id}>
                <td className={task.done ? 'markedAsDone' : ''}>{task.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={task.done}
                        onClick={() => props.handleMarkAsDone(task)} />
                    <IconButton style='warning' icon='undo' hide={!task.done}
                        onClick={() => props.handleMarkAsPending(task)} />
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(task)} />
                </td>
            </tr>
        ));
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
}

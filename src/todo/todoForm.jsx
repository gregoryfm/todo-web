import React from 'react';
import { connect } from 'react-redux';

import Grid from '../layout/Grid';
import IconButton from '../layout/IconButton';

const todoForm = props => (
    <div role="form" className="todoForm">
        <Grid cols="12 9 10">
            <input id='description' 
                className='form-control' 
                placeholder='Add a task'
                value={props.description}
                onChange={props.handleChange} />
        </Grid>

        <Grid cols="12 3 2">
            <IconButton style='primary' icon='plus' 
                onClick={props.handleAdd} />
            <IconButton style='info' icon='search' 
                onClick={props.handleSearch} />
        </Grid>
    </div>
)

const mapStateToProps = state => ({ description: state.todo.description});

export default connect(mapStateToProps)(todoForm);
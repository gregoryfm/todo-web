import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../layout/Grid';
import IconButton from '../layout/IconButton';
import { changeDescription } from './todoActions';

const todoForm = props => (
    <div role="form" className="todoForm">
        <Grid cols="12 9 10">
            <input id='description' 
                className='form-control' 
                placeholder='Add a task'
                value={props.description}
                onChange={props.changeDescription} />
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
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(todoForm);
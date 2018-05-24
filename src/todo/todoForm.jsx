import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../layout/Grid';
import IconButton from '../layout/IconButton';
import { changeDescription, search } from './todoActions';

class TodoForm extends React.Component {

    componentWillMount() {
        this.props.search();
    }

    render() {
        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input id='description' 
                        className='form-control' 
                        placeholder='Add a task'
                        value={this.props.description}
                        onChange={this.props.changeDescription} />
                </Grid>
        
                <Grid cols="12 3 2">
                    <IconButton style='primary' icon='plus' 
                        onClick={this.props.handleAdd} />
                    <IconButton style='info' icon='search' 
                        onClick={this.props.handleSearch} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description});
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription, search }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
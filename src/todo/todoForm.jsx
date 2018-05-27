import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../layout/Grid';
import IconButton from '../layout/IconButton';
import { add, changeDescription, search, clear } from './todoActions';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
    }

    keyHandler( event ) {
        const { add, clear, search, description } = this.props;
        if (event.key === 'Enter') {
            event.shiftKey ? search() : add( description );
        } else if ( event.key === 'Escape' ) {
            clear();
        }
    }

    componentWillMount() {
        this.props.search();
    }

    render() {

        const { add, search, description } = this.props;

        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input id='description'
                        className='form-control'
                        placeholder='Add a task'
                        value={this.props.description}
                        onKeyUp={this.keyHandler.bind(this)}
                        onChange={this.props.changeDescription} />
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton style='primary' icon='plus'
                        onClick={() => add( description )} />
                    <IconButton style='info' icon='search'
                        onClick={search} />
                    <IconButton style='default' icon='close'
                        onClick={this.props.clear} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDescription, search, add, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

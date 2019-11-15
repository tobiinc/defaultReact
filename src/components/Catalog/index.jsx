import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions.js';
import './style.scss';

export class Catalog extends Component {
    static propTypes = {
    };

    render() {
        return (
            <div className="catalog">
                Feierabend!!! ODER??? NICHT?!?
            </div>
        );
    }
}

/* istanbul ignore next */
function mapStateToProps(state) {
    return {
        home: state.home
    };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...actions }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);

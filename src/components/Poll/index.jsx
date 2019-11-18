import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';
import './style.scss';

export class Poll extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired
    };

    saveQuestions = (e) => {
        e.preventDefault();
        const data = new FormData(e.target.value);

        console.log(data);
    };

    render() {
        return (
            <div className="poll">
                <input
                    placeholder="Title"
                    className="poll__title"
                    type="text"
                    onChange={e => this.props.actions.pollTitle(e.target.value)}
                    />


                {this.props.poll.title}
                <select
                    onChange={e => this.props.actions.pollQuestionCount(e.target.value)}
                    >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>6</option>

                </select>

                <form onSubmit={this.saveQuestions}>
                    <ul className="poll__questionList">
                        <li>
                            1. <input placeholder="Question 1" name="field_[]" type="text"/>
                        </li>
                        <li>
                            2. <input placeholder="Question 2" name="field_[]" type="text"/>
                        </li>
                        <li>
                            3. <input placeholder="Question 3" name="field_[]" type="text"/>
                        </li>
                        <li>
                            4. <input placeholder="Question 4" name="field_[]" type="text"/>
                        </li>
                        <li>
                            5. <input placeholder="Question 5" name="field_[]" type="text"/>
                        </li>
                        <li>
                            6. <input placeholder="Question 6" name="field_[]" type="text"/>
                        </li>
                    </ul>
                    <button type="submit" value="submit">Save</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        poll: state.poll
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Poll);

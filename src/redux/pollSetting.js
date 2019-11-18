// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
    POLL_TITLE,
    POLL_QUESTION_COUNT
    } from './constants';

export function pollTitle(payload) {
    return {
        type: POLL_TITLE,
        payload
    };
}

export function pollQuestionCount(payload) {
    return {
        type: POLL_QUESTION_COUNT,
        payload
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case POLL_TITLE:
            return {
                ...state,
                title: action.payload
            };

        case POLL_QUESTION_COUNT:
            return {
                ...state,
                questionCount: action.payload
            };

        default:
            return state;
    }
}

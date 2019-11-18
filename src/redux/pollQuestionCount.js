import { POLL_QUESTION_COUNT } from './constants';

export function pollQuestionCount(payload) {
    return {
        type: POLL_QUESTION_COUNT,
        payload
    };
}

export function reducer(state, action) {
    console.log('count', action.payload);
    switch (action.type) {
        case POLL_QUESTION_COUNT:
            return {
                ...state,
                questionCount: action.payload
            };

        default:
            return state;
    }
}

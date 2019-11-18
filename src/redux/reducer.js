import initialState from './initialState';
import { reducer as pollTitleReducer } from './pollSetting';
import { reducer as pollQuestionCountReducer } from './pollSetting';

const reducers = [
  pollTitleReducer,
  pollQuestionCountReducer
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}

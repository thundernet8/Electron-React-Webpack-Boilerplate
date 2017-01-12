// sample reducer

import * as types from '../constants';
import assignToEmpty from '../utils/assign';

const initialState = {
  items: [],
  count: 0,
};

export default function dataReducer(state = initialState, action) {
  Object.freeze(state); // 如果 state 是普通对象，永远不要修改它！比如，reducer 里不要使用 Object.assign(state, newData)，应该使用 Object.assign({}, state, newData)。这样才不会覆盖旧的 state
  switch (action.type) {
    case types.ADD_DATA:
      return assignToEmpty(state, {
        count: state.count + 1,
        items: state.items.concat(
          assignToEmpty(
            action.data,
            { key: state.count + 1 }
          )
        ),
      });
    case types.REMOVE_DATA:
      return assignToEmpty(state, {
        items: state.items.filter((item) => {
          return item.key !== action.data;
        }),
      });
    default:
      return state;
  }
}

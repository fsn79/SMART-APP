import {
  CREATE_USER,
  CREATE_ITEM,
  CREATE_WORK_CENTER,
  EDIT_WORK_CENTER,
} from '../actionTypes';

const initState = {

  load: false,
  data: '',
  userList: [],
  itemList: [],
  workCenterList: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        userList: [...state, action.payload],
      };
    case CREATE_ITEM:
      return {
        ...state,
        itemList: [...state, action.payload],
      };
    case CREATE_WORK_CENTER:
      return {
        ...state,
        workCenterList: [...state, action.payload],
      };
    case EDIT_WORK_CENTER:
    /* eslint-disable */
      const index = state.workCenterList.findIndex((item) => item.id === action.payload);

      const newState = {
        ...state,
        workCenterList: [...state.workCenterList],
      };

      newState.workCenterList.splice(index, 1, action.payload);
      return newState;
    /* eslint-enable */
    default:
      return state;
  }
}

export default reducer;

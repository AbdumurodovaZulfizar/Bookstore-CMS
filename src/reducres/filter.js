const defaultState = 'All';

const filterReducer = (state = defaultState, action) => {
  if(action.type === 'CHANGE_FILTER') {
    return action.value
  } else {
    return state
  }
}

export default filterReducer;
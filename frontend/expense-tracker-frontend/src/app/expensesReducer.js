const initialState = {
  expenses: []
}

export const ActionTypes = {
  SET_EXPENSES: 'SET_EXPENSES'
}

export const ActionCreators = {
  setExpenses: payload => ({ type: ActionTypes.SET_EXPENSES, payload })
}

// reducer
export default (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.SET_EXPENSES:
      return { ...state, expenses: [...action.payload]}
  }
}

const initialState = {
  expenses: []
}

export const ActionTypes = {
  SET_EXPENSES: 'SET_EXPENSES',
  NEW_EXPENSE: 'NEW_EXPENSE'
}

export const ActionCreators = {
  setExpenses: payload => ({ type: ActionTypes.SET_EXPENSES, payload }),
  NewExpense: payload => ({ type: ActionTypes.NEW_EXPENSE, payload })
}

// reducer
export default (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.SET_EXPENSES:
      return { ...state, expenses: [...action.payload]}
    case ActionTypes.NEW_EXPENSE:
      return { ...state, expenses: [action.payload, ...state.expenses] }
    default:
      return state
  }
}
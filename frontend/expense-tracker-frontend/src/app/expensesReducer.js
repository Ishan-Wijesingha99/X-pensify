
const initialState = {
  expenses: []
}

export const ActionTypes = {
  SET_EXPENSES: 'SET_EXPENSES',
  NEW_EXPENSE: 'NEW_EXPENSE',
  EDIT_EXPENSE: 'EDIT_EXPENSE',
  DELETE_EXPENSE: 'DELETE_EXPENSE'
}

export const ActionCreators = {
  setExpenses: payload => ({ type: ActionTypes.SET_EXPENSES, payload }),
  NewExpense: payload => ({ type: ActionTypes.NEW_EXPENSE, payload }),
  editExpense: payload => ({ type: ActionTypes.EDIT_EXPENSE, payload }),
  deleteExpense: payload => ({ type: ActionTypes.DELETE_EXPENSE, payload })
}

// reducer
export default (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.SET_EXPENSES:
      return { ...state, expenses: [...action.payload]}

    case ActionTypes.NEW_EXPENSE:
      return { ...state, expenses: [action.payload, ...state.expenses] }

    case ActionTypes.EDIT_EXPENSE:
      var expenses = state.expenses.map(expenseObject => {
        if(expenseObject.id === action.payload.id) {
          expenseObject = action.payload
        }
        return expenseObject
      })
      return { ...state, expenses: [...expenses] }

    case ActionTypes.DELETE_EXPENSE:
      var expenses = state.expenses.filter(expenseObject => expenseObject.id !== action.payload.id)
      return { ...state, expenses: [...expenses] }
      
    default:
      return state
  }
}
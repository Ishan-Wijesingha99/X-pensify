using Expenses.DB;
using System.Collections.Generic;



namespace Expenses.Core
{
    public interface IExpensesServices
    {
        // for getting all expenses, GET
        List<Expense> GetExpenses();

        // for getting single expense, GET
        Expense GetExpense(int id);

        // creating an expense, POST
        Expense CreateExpense(Expense expense);

        // deleting an expense, POST
        void DeleteExpense(Expense expense);

        // editing an expense, POST
        Expense EditExpense(Expense expense);
    }

}

using Expenses.DB;
using System.Collections.Generic;



namespace Expenses.Core
{
    public interface IExpensesServices
    {
        List<Expense> GetExpenses();
    }
}

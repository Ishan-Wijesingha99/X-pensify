using Expenses.DB;
using System.Collections.Generic;
using System.Linq;

namespace Expenses.Core
{
    public class ExpensesServices : IExpensesServices
    {
        private AppDbContext _context;

        public ExpensesServices(AppDbContext context)
        {
            _context = context;
        }

        public List<Expense> GetExpenses()
        {
            return _context.Expenses.ToList();
        }
    }
}

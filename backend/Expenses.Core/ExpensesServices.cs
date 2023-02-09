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

        // GET
        // return all expenses
        public List<Expense> GetExpenses()
        {
            // _context.Expenses accesses the rows in the Expenses table, ToList makes it into a List
            return _context.Expenses.ToList();
        }

        // GET
        // return single expense
        public Expense GetExpense(int id)
        {
            // _context.Expenses accesses the rows in the Expenses table, First() returns the first in that array of rows that matches the condition we pass, which in this case is the Ids matching up
            return _context.Expenses.First(e => e.Id == id);
        }

        // POST
        // create a new expense
        public Expense CreateExpense(Expense expense)
        {
            // here we use the Add() method to add a row to the SQL database
            _context.Add(expense);

            // then save the changes
            _context.SaveChanges();

            // return this new expense
            return expense;
        }

        // POST
        // delete an expense
        public void DeleteExpense(Expense expense)
        {
            // here we use Remove() to delete a row from the SQL database
            _context.Expenses.Remove(expense);

            // then save the changes
            _context.SaveChanges();

        }

        // POST
        // edit an expense
        public Expense EditExpense(Expense expense)
        {
            // find the expense in the database based on the id
            var dbExpense = _context.Expenses.First(e => e.Id == expense.Id);

            // once we pull the new expense from the database, change it's properties 
            dbExpense.Description = expense.Description;
            dbExpense.Amount = expense.Amount;

            // save the changes
            _context.SaveChanges();

            // return the updated expense
            return dbExpense;
        }
    }
}

using Expenses.Core.DTO;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Linq;

namespace Expenses.Core
{
    public class ExpensesServices : IExpensesServices
    {
        private DB.AppDbContext _context;
        private readonly DB.User _user;

        public ExpensesServices(DB.AppDbContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _user = _context.Users.First(u => u.Username == httpContextAccessor.HttpContext.User.Identity.Name);
        }

        // GET
        // return all expenses
        public List<Expense> GetExpenses()
        {
            // _context.Expenses accesses the rows in the Expenses table, ToList makes it into a List
            return _context.Expenses.Where(e => e.User.Id == _user.Id).Select(e => (Expense)e).ToList();
        }

        // GET
        // return single expense
        public Expense GetExpense(int id)
        {
            // _context.Expenses accesses the rows in the Expenses table, First() returns the first in that array of rows that matches the condition we pass, which in this case is the Ids matching up
            return _context.Expenses.Where(e => e.User.Id == _user.Id && e.Id == id).Select(e => (Expense)e).First();
        }

        // POST
        // create a new expense
        public Expense CreateExpense(DB.Expense expense)
        {
            expense.User = _user;

            // here we use the Add() method to add a row to the SQL database
            _context.Add(expense);

            // then save the changes
            _context.SaveChanges();

            // return this new expense
            return (Expense)expense;
        }

        // POST
        // delete an expense
        public void DeleteExpense(Expense expense)
        {
            // need to get the expense you want to delete from the database
            var dbExpense = _context.Expenses.First(e => e.User.Id == _user.Id && e.Id == expense.Id);

            // here we use Remove() to delete a row from the SQL database
            _context.Expenses.Remove(dbExpense);

            // then save the changes
            _context.SaveChanges();

        }

        // POST
        // edit an expense
        public Expense EditExpense(Expense expense)
        {
            // find the expense in the database based on the id
            var dbExpense = _context.Expenses.First(e => e.User.Id == _user.Id && e.Id == expense.Id);

            // once we pull the new expense from the database, change it's properties 
            dbExpense.Description = expense.Description;
            dbExpense.Amount = expense.Amount;

            // save the changes
            _context.SaveChanges();

            // return the updated expense
            return expense;
        }
    }
}

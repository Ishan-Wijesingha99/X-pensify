using Expenses.Core;
using Expenses.DB;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;



namespace ExpensesWebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ExpensesController : ControllerBase
    {
        private IExpensesServices _expensesServices;

        public ExpensesController(IExpensesServices expenseServices)
        {
            _expensesServices = expenseServices;
        }

        // getting all the expenses
        [HttpGet]
        public IActionResult GetExpenses()
        {
            // Ok is used for a 200 status code HTTP response
            return Ok(_expensesServices.GetExpenses());
        }

        // get a specific expense
        [HttpGet("{id}", Name = "GetExpense")]
        public IActionResult GetExpense(int id)
        {
            // we take the id as an argument and use the GetExpense function we defined in ExpensesServices.cs to return the single expense
            return Ok(_expensesServices.GetExpense(id));
        }

        // create an expense
        [HttpPost]
        public IActionResult CreateExpense(Expense expense)
        {
            // Cannot use Ok() because it's used for 200 HTTP response, if we add something to the database successfully, that would be a 201 HTTP response
            var newExpense = _expensesServices.CreateExpense(expense);

            // this will return a 201 http response
            // this will return a GET response, so the first argument is which GET response we want it to use, and in this case we will use "GetExpense", that's why we named it above
            return CreatedAtRoute("GetExpense", new { newExpense.Id }, newExpense);
        }

        // delete an expense
        [HttpDelete]
        public IActionResult DeleteExpense(Expense expense)
        {
            _expensesServices.DeleteExpense(expense);

            // after deleting, just return a 200 HTTP response
            return Ok();
        }

        // updating an expense
        [HttpPut]
        public IActionResult EditExpense(Expense expense)
        {
            return Ok(_expensesServices.EditExpense(expense));
        }
    }
}

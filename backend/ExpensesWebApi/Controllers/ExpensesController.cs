using Expenses.Core;
using Microsoft.AspNetCore.Mvc;



namespace ExpensesWebApi.Controllers
{
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
            // Ok is used for successful HTTP requests (200 range)
            return Ok(_expensesServices.GetExpenses());
        }

    }
}

using Microsoft.AspNetCore.Mvc;



namespace ExpensesWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExpensesController : ControllerBase
    {
        public ExpensesController()
        {
           
        }

        // getting all the expenses
        [HttpGet]
        public IActionResult GetExpenses()
        {

        }

    }
}

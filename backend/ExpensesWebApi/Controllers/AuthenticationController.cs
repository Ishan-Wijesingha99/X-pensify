using Expenses.Core;
using Expenses.DB;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



// this is the controller for authentication
namespace ExpensesWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticationController : ControllerBase
    {

        private readonly IUserService _userService;



        [HttpPost("signup")]
        public async Task<IActionResult> SignUp(User user)
        {

        }

    }
}

using Expenses.Core;
using Expenses.Core.CustomExceptions;
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

        public AuthenticationController(IUserService userService)
        {
            _userService = userService;
        }

        // sign up controller endpoint
        [HttpPost("signup")]
        public async Task<IActionResult> SignUp(User user)
        {
            try
            {
                var result = await _userService.SignUp(user);

                return Created("", result);

            } catch(UsernameAlreadyExistsException error)
            {
                return StatusCode(409, error.Message);
            }
        }

        // sign in controller endpoint
        [HttpPost("signin")]
        public async Task<IActionResult> SignIn(User user)
        {
            try
            {
                var result = await _userService.SignIn(user);

                return Ok(result);
            }
            catch(InvalidUsernamePasswordException error)
            {
                return StatusCode(401, error.Message);
            }
        }

    }
}

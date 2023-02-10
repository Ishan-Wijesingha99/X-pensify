using Expenses.Core.CustomExceptions;
using Expenses.Core.DTO;
using Expenses.DB;
using Microsoft.AspNet.Identity;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;



namespace Expenses.Core
{
    public class UserService : IUserService
    {
        private readonly AppDbContext _context;
        private readonly IPasswordHasher _passwordHasher;

        public UserService(AppDbContext context, IPasswordHasher passwordHasher)
        {
            _context = context;
            _passwordHasher = passwordHasher;
        }



        // sign in method
        public async Task<AuthenticatedUser> SignIn(User user)
        {
            var currentUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == user.Username);

            if(currentUser == null || _passwordHasher.VerifyHashedPassword(currentUser.Password, user.Password) == PasswordVerificationResult.Failed)
            {
                throw new InvalidUsernamePasswordException("Invalid password or username");
            }

            // if you get to this point in the code, the password and username given by the user is fine, therfore return an AuthenticatedUser
            return new AuthenticatedUser
            {
                Username = user.Username,
                Token = "test token"
            };
        }

        // sign up method
        public async Task<AuthenticatedUser> SignUp(User user)
        {
            // check if username already exists when signing up a user
            // go into the database (_context), then into the Users table, then get the first row that matches the condition specified
            var checkUser = await _context.Users.FirstOrDefaultAsync(u => u.Username.Equals(user.Username));

            // if checkUser exists, then it means the username already exists in our database, we need to throw an exception
            if(checkUser != null)
            {
                throw new UsernameAlreadyExistsException("Username already exists");
            }

            // if username doesn't already exist in the database, then we need to hash the password and save all the new user to the database
            user.Password = _passwordHasher.HashPassword(user.Password);

            // add user to database after password has been hashed
            await _context.AddAsync(user);
            await _context.SaveChangesAsync();

            return new AuthenticatedUser
            {
                Username = user.Username,
                Token = "test token"
            };

        }
    }
}

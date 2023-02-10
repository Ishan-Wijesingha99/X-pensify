using Expenses.Core.DTO;
using Expenses.DB;
using System.Threading.Tasks;



namespace Expenses.Core
{
    public interface IUserService
    {
        // sign up
        Task<AuthenticatedUser> SignUp(User user);

        // sign in
        Task<AuthenticatedUser> SignIn(User user);

    }
}

using Microsoft.EntityFrameworkCore;

namespace Expenses.DB
{
    public class AppDbContext : DbContext
    {
        // this is for the Expenses table
        public DbSet<Expense> Expenses { get; set; }

        // this is for the Users table
        public DbSet<User> Users { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=ExpensesDB;Integrated Security=True;");
        }

    }
}

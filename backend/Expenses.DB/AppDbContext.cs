using Microsoft.EntityFrameworkCore;

namespace Expenses.DB
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // this is for the Expenses table
        public DbSet<Expense> Expenses { get; set; }

        // this is for the Users table
        public DbSet<User> Users { get; set; }

    }
}

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;



namespace Expenses.DB
{
    public class Expense
    {
        [Key]
        public int Id { get; set; }

        public string Description { get; set; }

        public double Amount { get; set; }

        // there will be a one-to-many relationship betwen the users table and the expenses table, because one user can have many expenses
        // to implement this, we do this
        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}

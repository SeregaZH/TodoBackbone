using System.Data.Entity;
using TodoApplication.Models;

namespace TodoApplication.Repositories
{
  public class ToDoContext : DbContext
  {
    public ToDoContext()
      : base("ToDoContext")
    {
      
    }

    public DbSet<TodoItem> Todos { get; set; }
  }
}
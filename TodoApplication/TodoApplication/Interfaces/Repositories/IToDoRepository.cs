using System;
using TodoApplication.Models;

namespace TodoApplication.Interfaces.Repositories
{
  public interface IToDoRepository : IRepository<TodoItem, Guid>
  {
  }
}

using System;
using TodoApplication.Models;

namespace TodoApplication.Interfaces.Repositories
{
  public interface IToDoRepositoryAsync : IRepositoryAsync<TodoItem, Guid>
  {
  }
}

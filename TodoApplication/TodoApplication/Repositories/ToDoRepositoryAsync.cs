using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using TodoApplication.Interfaces.Repositories;
using TodoApplication.Models;

namespace TodoApplication.Repositories
{
  public class ToDoRepositoryAsync : IToDoRepositoryAsync
  {
    private readonly ToDoContext _doContext;
    
    public ToDoRepositoryAsync()
    {
      _doContext = new ToDoContext();
    }
    
    public async Task CreateAsync(TodoItem item)
    {
      _doContext.Todos.Add(item);
      await _doContext.SaveChangesAsync();
    }

    public async Task DeleteAsync(TodoItem item)
    {
      _doContext.Todos.Remove(item);
      await _doContext.SaveChangesAsync();
    }

    public async Task DeleteAsync(Guid id)
    {
      var deletedItem = _doContext.Todos.Find(id);
      if (deletedItem != null)
      {
        _doContext.Todos.Remove(deletedItem);
        await _doContext.SaveChangesAsync();
      }
    }

    public async Task UpdateAsync(TodoItem item)
    {
      var updatedItem = _doContext.Todos.Find(item.Id);

      if (updatedItem != null)
      {
        _doContext.Entry(updatedItem).CurrentValues.SetValues(item);
        await _doContext.SaveChangesAsync();
      }
    }

    public async Task<TodoItem> GetAsync(Guid id)
    {
      return await _doContext.Todos.FindAsync(id);
    }

    public async Task<IEnumerable<TodoItem>> GetAllAsync()
    {
      return await _doContext.Todos.ToListAsync();
    }
  }
}
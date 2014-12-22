using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using TodoApplication.Interfaces.Repositories;
using TodoApplication.Models;

namespace TodoApplication.Repositories
{
  public class ToDoRepository : IToDoRepository
  {
    private readonly ToDoContext _doContext;
    
    public ToDoRepository()
    {
      _doContext = new ToDoContext();
    }
    
    public void Create(TodoItem item)
    {
      _doContext.Todos.Add(item);
      _doContext.SaveChanges();
    }

    public void Delete(TodoItem item)
    {
      _doContext.Todos.Remove(item);
      _doContext.SaveChanges();
    }

    public void Delete(Guid id)
    {
      var deletedItem = _doContext.Todos.Find(id);
      if (deletedItem != null)
      {
        _doContext.Todos.Remove(deletedItem);
        _doContext.SaveChanges();
      }
    }

    public void Update(TodoItem item)
    {
      var updatedItem = _doContext.Todos.Find(item.Id);

      if (updatedItem != null)
      {
        _doContext.Entry(updatedItem).CurrentValues.SetValues(item);
        _doContext.SaveChanges();
      }
    }

    public TodoItem Get(Guid id)
    {
      return _doContext.Todos.Find(id);
    }

    public IEnumerable<TodoItem> GetAll()
    {
      return _doContext.Todos.AsEnumerable();
    }
  }
}
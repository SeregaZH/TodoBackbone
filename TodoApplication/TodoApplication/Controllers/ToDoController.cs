using System;
using System.Collections.Generic;
using System.Web.Http;
using TodoApplication.Interfaces.Repositories;
using TodoApplication.Models;

namespace TodoApplication.Controllers
{
  public class ToDoController : ApiController
  {
    private readonly IToDoRepository _todoRepository;

    public ToDoController(IToDoRepository todoRepository)
    {
      _todoRepository = todoRepository;
    }

    // GET api/todo
    public IEnumerable<TodoItem> Get()
    {
      return _todoRepository.GetAll();
    }

    // GET api/todo/{Guid}
    public TodoItem Get(Guid id)
    {
      return _todoRepository.Get(id);
    }

    // POST api/todo
    public Guid Post(TodoItem item)
    {
      item.Id = Guid.NewGuid();
      _todoRepository.Create(item);
      return item.Id;
    }

    // PUT api/todo
    public void Put(TodoItem item)
    {
      _todoRepository.Update(item);
    }

    // DELETE api/todo/5
    public void Delete([FromUri]Guid id)
    {
      _todoRepository.Delete(id);
    }
  }
}
using System;
using System.Threading.Tasks;
using System.Web.Http;
using TodoApplication.Interfaces.Repositories;
using TodoApplication.Models;

namespace TodoApplication.Controllers
{
  public class ToDoController : ApiController
  {
    private readonly IToDoRepositoryAsync _todoRepositoryAsync;

    public ToDoController(IToDoRepositoryAsync todoRepositoryAsync)
    {
      _todoRepositoryAsync = todoRepositoryAsync;
    }

    // GET api/todo
    public async Task<IHttpActionResult> Get()
    {
      return Ok(await _todoRepositoryAsync.GetAllAsync());
    }

    // GET api/todo/{Guid}
    public async Task<IHttpActionResult> Get(Guid id)
    {
      var item = await _todoRepositoryAsync.GetAllAsync();
      if (item != null)
      {
        return Ok(item);
      }

      return NotFound();
    }

    // POST api/todo
    public async Task<IHttpActionResult> Post(TodoItem item)
    {
      item.Id = Guid.NewGuid();
      await _todoRepositoryAsync.CreateAsync(item);
      return Ok(item.Id);
    }

    // PUT api/todo
    public async Task<IHttpActionResult> Put(TodoItem item)
    {
      await _todoRepositoryAsync.UpdateAsync(item);
      return Ok();
    }

    // DELETE api/todo/5
    public async Task<IHttpActionResult> Delete([FromUri]Guid id)
    {
      await _todoRepositoryAsync.DeleteAsync(id);
      return Ok();
    }
  }
}
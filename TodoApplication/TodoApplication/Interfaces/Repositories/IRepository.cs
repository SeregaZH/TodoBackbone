using System.Collections.Generic;

namespace TodoApplication.Interfaces.Repositories
{
  public interface IRepository<TItem, in TId>
  {
    void Create(TItem item);
    void Delete(TItem item);
    void Delete(TId id);
    void Update(TItem item);
    TItem Get(TId id);
    IEnumerable<TItem> GetAll();
  }
}

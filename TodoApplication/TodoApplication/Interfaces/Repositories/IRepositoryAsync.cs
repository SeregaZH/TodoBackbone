using System.Collections.Generic;
using System.Threading.Tasks;

namespace TodoApplication.Interfaces.Repositories
{
  public interface IRepositoryAsync<TItem, in TId>
  {
    Task CreateAsync(TItem item);
    Task DeleteAsync(TItem item);
    Task DeleteAsync(TId id);
    Task UpdateAsync(TItem item);
    Task<TItem> GetAsync(TId id);
    Task<IEnumerable<TItem>> GetAllAsync();
  }
}

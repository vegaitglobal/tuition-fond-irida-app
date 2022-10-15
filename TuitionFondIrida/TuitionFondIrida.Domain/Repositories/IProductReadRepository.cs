using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Domain.Repositories;

public interface IProductReadRepository
{
    Task<IEnumerable<Product>> FindPagedAsync(int pageNumber, CancellationToken cancellationToken);
}
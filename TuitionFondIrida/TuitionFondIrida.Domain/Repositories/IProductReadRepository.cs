using TuitionFondIrida.Domain.Models.Common;
using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Domain.Repositories;

public interface IProductReadRepository
{
    Task<PageOf<Product>> FindPagedAsync(int pageNumber, CancellationToken cancellationToken);
}
using CSharpFunctionalExtensions;
using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Domain.Repositories;

public interface IProductReadRepository
{
    Task<IEnumerable<Product>> FindAllAsync(CancellationToken cancellationToken);

    Task<Maybe<Product>> FindByIdAsync(CancellationToken cancellationToken);
}
using CSharpFunctionalExtensions;
using TuitionFondIrida.Domain.Models.Read;
using TuitionFondIrida.Domain.Repositories;

namespace TuitionFondIrida.Persistence.Repositories.Read;

public class ProductReadRepository : IProductReadRepository
{
    public Task<IEnumerable<Product>> FindAllAsync(CancellationToken cancellationToken)
    {
        var array = new List<Product>
        {
            new(Guid.NewGuid(), "Product")
        };

        return Task<IEnumerable<Product>>.Factory.StartNew(() => array, cancellationToken);
    }

    public Task<Maybe<Product>> FindByIdAsync(CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
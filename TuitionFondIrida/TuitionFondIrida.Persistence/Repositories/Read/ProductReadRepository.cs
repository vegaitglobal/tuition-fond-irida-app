using CSharpFunctionalExtensions;
using TuitionFondIrida.Domain.Repositories;
using TuitionFondIrida.Persistence.Mappers;
using TuitionIridaFond.Persistence.Contracts.Models;

namespace TuitionFondIrida.Persistence.Repositories.Read;

public class ProductReadRepository : IProductReadRepository
{
    private readonly IProductMapper productMapper;

    public ProductReadRepository(IProductMapper productMapper)
    {
        this.productMapper = productMapper;
    }

    public Task<IEnumerable<Domain.Models.Read.Product>> FindAllAsync(CancellationToken cancellationToken)
    {
        var array = new List<Product>
        {
            new()
            {
                Id = Guid.NewGuid(),
                Title = "Product"
            }
        };

        var products = array.Select(this.productMapper.Create);
        return Task<IEnumerable<Domain.Models.Read.Product>>.Factory.StartNew(() => products, cancellationToken);
    }

    public Task<Maybe<Domain.Models.Read.Product>> FindByIdAsync(CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
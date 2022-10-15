using Contentful.Core;
using CSharpFunctionalExtensions;
using TuitionFondIrida.Domain.Repositories;
using TuitionFondIrida.Persistence.Mappers.Abstractions;
using TuitionIridaFond.Persistence.Contracts.Models;

namespace TuitionFondIrida.Persistence.Repositories.Read;

public class ProductReadRepository : IProductReadRepository
{
    private readonly IContentfulClient contentfulClient;
    private readonly IProductMapper productMapper;

    public ProductReadRepository(IContentfulClient contentfulClient, IProductMapper productMapper)
    {
        this.contentfulClient = contentfulClient;
        this.productMapper = productMapper;
    }

    public async Task<IEnumerable<Domain.Models.Read.Product>> FindAllAsync(CancellationToken cancellationToken)
    {
        var products = await this.contentfulClient.GetEntries<Product>(cancellationToken: cancellationToken);

        return products.Select(this.productMapper.Create);
    }

    public Task<Maybe<Domain.Models.Read.Product>> FindByIdAsync(CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
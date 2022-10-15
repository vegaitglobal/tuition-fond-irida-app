using Contentful.Core;
using Contentful.Core.Search;
using TuitionFondIrida.Domain.Repositories;
using TuitionFondIrida.Persistence.Mappers.Abstractions;
using TuitionIridaFond.Persistence.Contracts.Models;

namespace TuitionFondIrida.Persistence.Repositories.Read;

public class ProductReadRepository : IProductReadRepository
{
    private readonly IContentfulClient contentfulClient;
    private readonly IProductMapper productMapper;
    private const int PageSize = 3;

    public ProductReadRepository(IContentfulClient contentfulClient, IProductMapper productMapper)
    {
        this.contentfulClient = contentfulClient;
        this.productMapper = productMapper;
    }

    public async Task<IEnumerable<Domain.Models.Read.Product>> FindPagedAsync(int pageNumber,
        CancellationToken cancellationToken)
    {
        var products =
            await this.contentfulClient.GetEntriesByType(
                ContentfulContentTypeIds.Product,
                new QueryBuilder<Product>()
                    .Skip((pageNumber - 1) * PageSize)
                    .Limit(PageSize),
                cancellationToken: cancellationToken);

        return products.Select(this.productMapper.Create);
    }
}
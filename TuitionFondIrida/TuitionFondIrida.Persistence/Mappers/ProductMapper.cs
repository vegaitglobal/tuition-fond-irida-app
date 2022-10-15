using TuitionFondIrida.Persistence.Mappers.Abstractions;
using TuitionIridaFond.Persistence.Contracts.Models;

namespace TuitionFondIrida.Persistence.Mappers;

public class ProductMapper : IProductMapper
{
    private readonly IAssetMapper assetMapper;

    public ProductMapper(IAssetMapper assetMapper)
    {
        this.assetMapper = assetMapper;
    }

    public Domain.Models.Read.Product Create(Product product)
    {
        var domainImage = this.assetMapper.Create(product.Image);
        return new Domain.Models.Read.Product(product.Title, product.Description, product.Sizes, domainImage);
    }
}
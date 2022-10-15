using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Api.Mappers.Abstractions;
using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Api.Mappers;

public class ProductMapper : IProductMapper
{
    private readonly IAssetMapper assetMapper;

    public ProductMapper(IAssetMapper assetMapper)
    {
        this.assetMapper = assetMapper;
    }

    public ProductDto Create(Product product)
    {
        return new ProductDto
        {
            Title = product.Title,
            Description = product.Description,
            Sizes = product.Sizes,
            Image = this.assetMapper.Create(product.Image)
        };
    }
}
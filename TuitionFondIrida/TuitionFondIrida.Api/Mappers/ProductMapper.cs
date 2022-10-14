using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Api.Mappers;

public class ProductMapper : IProductMapper
{
    public ProductDto Create(Product product)
    {
        return new ProductDto
        {
            Id = product.Id,
            Title = product.Title
        };
    }
}
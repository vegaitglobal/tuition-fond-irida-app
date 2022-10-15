using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Api.Mappers.Abstractions;

public interface IProductMapper
{
    ProductDto Create(Product product);
}
using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Persistence.Mappers.Abstractions;

public interface IProductMapper
{
    Product Create(TuitionIridaFond.Persistence.Contracts.Models.Product product);
}
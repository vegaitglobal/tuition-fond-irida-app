using TuitionIridaFond.Persistence.Contracts.Models;

namespace TuitionFondIrida.Persistence.Mappers;

public class ProductMapper : IProductMapper
{
    public Domain.Models.Read.Product Create(Product product)
    {
        return new Domain.Models.Read.Product(product.Id, product.Title);
    }
}
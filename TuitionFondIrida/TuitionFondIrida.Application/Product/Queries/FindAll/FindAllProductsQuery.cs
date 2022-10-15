using TuitionFondIrida.Application.Abstractions;

namespace TuitionFondIrida.Application.Product.Queries.FindAll;

public class FindAllProductsQuery : IQuery<IEnumerable<Domain.Models.Read.Product>>
{
    public FindAllProductsQuery(int pageNumber)
    {
        this.PageNumber = pageNumber;
    }

    public int PageNumber { get; }
}
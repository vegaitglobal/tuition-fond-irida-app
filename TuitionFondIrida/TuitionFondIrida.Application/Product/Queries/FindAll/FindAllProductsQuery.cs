using TuitionFondIrida.Application.Abstractions;
using TuitionFondIrida.Domain.Models.Common;

namespace TuitionFondIrida.Application.Product.Queries.FindAll;

public class FindAllProductsQuery : IQuery<PageOf<Domain.Models.Read.Product>>
{
    public FindAllProductsQuery(int pageNumber)
    {
        this.PageNumber = pageNumber;
    }

    public int PageNumber { get; }
}
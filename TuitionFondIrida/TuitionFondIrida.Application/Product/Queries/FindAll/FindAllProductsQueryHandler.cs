using TuitionFondIrida.Application.Abstractions;
using TuitionFondIrida.Domain.Repositories;

namespace TuitionFondIrida.Application.Product.Queries.FindAll;

public class FindAllProductsQueryHandler : IQueryHandler<FindAllProductsQuery, IEnumerable<Domain.Models.Read.Product>>
{
    private readonly IProductReadRepository productReadRepository;

    public FindAllProductsQueryHandler(IProductReadRepository productReadRepository)
    {
        this.productReadRepository = productReadRepository;
    }

    public Task<IEnumerable<Domain.Models.Read.Product>> Handle(FindAllProductsQuery request, CancellationToken cancellationToken)
    {
        return this.productReadRepository.FindAllAsync(cancellationToken);
    }
}
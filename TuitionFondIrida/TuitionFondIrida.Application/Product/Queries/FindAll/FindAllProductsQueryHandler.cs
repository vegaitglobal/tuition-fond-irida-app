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

    public async Task<IEnumerable<Domain.Models.Read.Product>> Handle(FindAllProductsQuery request, CancellationToken cancellationToken)
    {
        return await this.productReadRepository.FindAllAsync(cancellationToken);
    }
}
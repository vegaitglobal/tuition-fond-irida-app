using TuitionFondIrida.Application.Abstractions;
using TuitionFondIrida.Domain.Models.Common;
using TuitionFondIrida.Domain.Repositories;

namespace TuitionFondIrida.Application.Product.Queries.FindAll;

public class FindAllProductsQueryHandler : IQueryHandler<FindAllProductsQuery, PageOf<Domain.Models.Read.Product>>
{
    private readonly IProductReadRepository productReadRepository;

    public FindAllProductsQueryHandler(IProductReadRepository productReadRepository)
    {
        this.productReadRepository = productReadRepository;
    }

    public async Task<PageOf<Domain.Models.Read.Product>> Handle(FindAllProductsQuery request, CancellationToken cancellationToken)
    {
        return await this.productReadRepository.FindPagedAsync(request.PageNumber, cancellationToken);
    }
}
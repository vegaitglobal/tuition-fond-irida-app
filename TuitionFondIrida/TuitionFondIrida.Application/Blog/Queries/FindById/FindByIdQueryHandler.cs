using TuitionFondIrida.Application.Abstractions;
using TuitionFondIrida.Domain.Repositories;

namespace TuitionFondIrida.Application.Blog.Queries.FindById;

public class FindByIdQueryHandler : IQueryHandler<FindByIdQuery, Domain.Models.Read.Blog>
{
    private readonly IBlogReadRepository blogReadRepository;

    public FindByIdQueryHandler(IBlogReadRepository blogReadRepository)
    {
        this.blogReadRepository = blogReadRepository;
    }

    public async Task<Domain.Models.Read.Blog> Handle(FindByIdQuery request, CancellationToken cancellationToken)
    {
        return await this.blogReadRepository.FindByIdAsync(request.Id, cancellationToken);
    }
}
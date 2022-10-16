using TuitionFondIrida.Application.Abstractions;
using TuitionFondIrida.Domain.Models.Common;
using TuitionFondIrida.Domain.Repositories;

namespace TuitionFondIrida.Application.Blog.Queries;

public class FindAllBlogsQueryHandler : IQueryHandler<FindAllBlogsQuery, PageOf<Domain.Models.Read.Blog>>
{
    private readonly IBlogReadRepository blogReadRepository;

    public FindAllBlogsQueryHandler(IBlogReadRepository blogReadRepository)
    {
        this.blogReadRepository = blogReadRepository;
    }

    public async Task<PageOf<Domain.Models.Read.Blog>> Handle(FindAllBlogsQuery request,
        CancellationToken cancellationToken)
    {
        return await this.blogReadRepository.FindAllAsync(request.PageNumber, cancellationToken);
    }
}
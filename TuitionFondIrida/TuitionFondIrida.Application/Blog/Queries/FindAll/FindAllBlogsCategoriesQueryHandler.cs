using TuitionFondIrida.Application.Abstractions;
using TuitionFondIrida.Domain.Repositories;

namespace TuitionFondIrida.Application.Blog.Queries.FindAll;

public class FindAllBlogsCategoriesQueryHandler : IQueryHandler<FindAllBlogsCategoriesQuery, IList<string>>
{
    private readonly IBlogReadRepository blogReadRepository;

    public FindAllBlogsCategoriesQueryHandler(IBlogReadRepository blogReadRepository)
    {
        this.blogReadRepository = blogReadRepository;
    }

    public async Task<IList<string>> Handle(FindAllBlogsCategoriesQuery request, CancellationToken cancellationToken) =>
        await this.blogReadRepository.FindAllBlogsCategoriesAsync(cancellationToken);
}
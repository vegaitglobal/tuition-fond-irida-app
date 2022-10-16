using Contentful.Core;
using Contentful.Core.Search;
using TuitionFondIrida.Domain.Models.Common;
using TuitionFondIrida.Domain.Repositories;
using TuitionFondIrida.Persistence.Mappers.Abstractions;
using Blog = TuitionIridaFond.Persistence.Contracts.Models.Blog;

namespace TuitionFondIrida.Persistence.Repositories.Read;

public class BlogReadRepository : IBlogReadRepository
{
    private readonly IContentfulClient contentfulClient;
    private readonly IBlogMapper blogMapper;
    private const int PageSize = 9;

    public BlogReadRepository(IContentfulClient contentfulClient, IBlogMapper blogMapper)
    {
        this.contentfulClient = contentfulClient;
        this.blogMapper = blogMapper;
    }

    public async Task<PageOf<Domain.Models.Read.Blog>> FindAllAsync(int pageNumber, CancellationToken cancellationToken)
    {
        var blogs =
            await this.contentfulClient.GetEntriesByType(
                ContentfulContentTypeIds.Blog,
                new QueryBuilder<Blog>()
                    .Skip((pageNumber - 1) * PageSize)
                    .Limit(PageSize)
                    .OrderBy("-sys.createdAt"),
                cancellationToken: cancellationToken);

        return new PageOf<Domain.Models.Read.Blog>(blogs.Total, blogs.Select(b => this.blogMapper.Create(b, b.Sys.Id)),
            PageSize);
    }

    public async Task<Domain.Models.Read.Blog> FindByIdAsync(string id, CancellationToken cancellationToken)
    {
        var blog =
            await this.contentfulClient.GetEntriesByType(
                ContentfulContentTypeIds.Blog,
                new QueryBuilder<Blog>().FieldEquals("sys.id", id),
                cancellationToken: cancellationToken);

        return this.blogMapper.Create(blog.First(), blog.First().Sys.Id);
    }
}
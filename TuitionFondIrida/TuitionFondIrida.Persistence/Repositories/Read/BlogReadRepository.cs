using Contentful.Core;
using Contentful.Core.Models;
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

    public async Task<PageOf<Domain.Models.Read.Blog>> FindAllAsync(int pageNumber, string blogCategory, CancellationToken cancellationToken)
    {
        var blogs = !string.IsNullOrEmpty(blogCategory)
            ? await FindAllBlogsOfGivenCategoryAsync(pageNumber, blogCategory, cancellationToken)
            : await FindAllBlogsAsync(pageNumber, cancellationToken);

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

    public async Task<IList<string>> FindAllBlogsCategoriesAsync(CancellationToken cancellationToken)
    {
        var categories = new List<string>();

        var blogs = await this.contentfulClient.GetEntriesByType(
                        ContentfulContentTypeIds.Blog,
                        new QueryBuilder<Blog>(),
                        cancellationToken: cancellationToken);

        foreach(var blog in blogs)
        {
            if (blog.Categories == null)
                continue;
            
            categories.AddRange(from category in blog.Categories
                                where !categories.Contains(category)
                                select category);
        }

        return categories;

    }

    private Task<ContentfulCollection<Blog>> FindAllBlogsOfGivenCategoryAsync(int pageNumber, string blogCategory, CancellationToken cancellationToken)
    {
        return this.contentfulClient.GetEntriesByType(
                        ContentfulContentTypeIds.Blog,
                        new QueryBuilder<Blog>()
                            .FieldIncludes("fields.categories", new string[] { blogCategory })
                            .Skip((pageNumber - 1) * PageSize)
                            .Limit(PageSize)
                            .OrderBy("-sys.createdAt"),
                        cancellationToken: cancellationToken);
    }

    private Task<ContentfulCollection<Blog>> FindAllBlogsAsync(int pageNumber, CancellationToken cancellationToken)
    {
        return this.contentfulClient.GetEntriesByType(
                        ContentfulContentTypeIds.Blog,
                        new QueryBuilder<Blog>()
                            .Skip((pageNumber - 1) * PageSize)
                            .Limit(PageSize)
                            .OrderBy("-sys.createdAt"),
                        cancellationToken: cancellationToken);
    }
}
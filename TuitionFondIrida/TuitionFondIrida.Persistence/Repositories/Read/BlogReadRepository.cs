using Contentful.Core;
using CSharpFunctionalExtensions;
using TuitionFondIrida.Domain.Repositories;
using TuitionFondIrida.Persistence.Mappers.Abstractions;
using Blog = TuitionIridaFond.Persistence.Contracts.Models.Blog;

namespace TuitionFondIrida.Persistence.Repositories.Read
{
    public class BlogReadRepository : IBlogReadRepository
    {
        private readonly IContentfulClient contentfulClient;
        private readonly IBlogMapper blogMapper;

        public BlogReadRepository(IContentfulClient contentfulClient, IBlogMapper blogMapper)
        {
            this.contentfulClient = contentfulClient;
            this.blogMapper = blogMapper;
        }

        public async Task<IEnumerable<Domain.Models.Read.Blog>> FindAllAsync(CancellationToken cancellationToken)
        {
            var blogs = await this.contentfulClient.GetEntriesByType<Blog>(ContentfulContentTypeIds.Blog, cancellationToken: cancellationToken);

            return blogs.Select(blogMapper.Create);
        }
    }
}

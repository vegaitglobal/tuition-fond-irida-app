using TuitionFondIrida.Persistence.Mappers.Abstractions;
using TuitionIridaFond.Persistence.Contracts.Models;

namespace TuitionFondIrida.Persistence.Mappers;

    public class BlogMapper : IBlogMapper
    {
        private readonly IAssetMapper assetMapper;
        private readonly IDocumenMapper documentMapper;
        private readonly IAuthorMapper authorMapper;

        public BlogMapper(IAssetMapper assetMapper, IDocumenMapper documentMapper, IAuthorMapper authorMapper)
        {
            this.assetMapper = assetMapper;
            this.documentMapper = documentMapper;
            this.authorMapper = authorMapper;
        }

        public Domain.Models.Read.Blog Create(Blog blog, string blogId)
        {
            var blogImage = this.assetMapper.Create(blog.Image);
            var content = this.documentMapper.MapDocument(blog.Content);
            var blogAuthor = this.authorMapper.Create(blog.Author);
            return new Domain.Models.Read.Blog(blogId, blog.Title, blog.ShortDescription, blogImage, content, blog.Categories, blogAuthor);
        }
    }


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

        public Domain.Models.Read.Blog Create(Blog blog)
        {
            var blogImage = assetMapper.Create(blog.Image);
            var content = documentMapper.MapDocument(blog.Content);
            var blogAuthor = authorMapper.Create(blog.Author);
            return new Domain.Models.Read.Blog(blog.Title, blog.ShortDescription, blogImage, content, blog.Categories, blogAuthor);
        }
    }


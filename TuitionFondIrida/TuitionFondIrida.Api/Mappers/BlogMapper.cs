using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Api.Mappers.Abstractions;
using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Api.Mappers
{
    public class BlogMapper : IBlogMapper
    {
        private readonly IAssetMapper assetMapper;
        private readonly IAuthorMapper authorMapper;

        public BlogMapper(IAssetMapper assetMapper, IAuthorMapper authorMapper)
        {
            this.assetMapper = assetMapper;
            this.authorMapper = authorMapper;
        }

        public BlogDto Create(Blog blog)
        {
            return new BlogDto
            {
                Title = blog.Title,
                ShortDescription = blog.ShortDescription,
                Image = this.assetMapper.Create(blog.Image),
                Content = blog.Content,
                BlogAuthor = this.authorMapper.Create(blog.BlogAuthor)
            };
        }
    }
}

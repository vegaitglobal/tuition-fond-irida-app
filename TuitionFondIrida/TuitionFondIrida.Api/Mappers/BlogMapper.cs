using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Api.Mappers.Abstractions;
using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Api.Mappers
{
    public class BlogMapper : IBlogMapper
    {
        private readonly IAssetMapper assetMapper;

        public BlogMapper(IAssetMapper assetMapper)
        {
            this.assetMapper = assetMapper;
        }

        public BlogDto Create(Blog blog)
        {
            return new BlogDto
            {
                Title = blog.Title,
                ShortDescription = blog.ShortDescription,
                Image = this.assetMapper.Create(blog.Image)
            };
        }
    }
}

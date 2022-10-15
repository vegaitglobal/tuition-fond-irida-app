using TuitionFondIrida.Persistence.Mappers.Abstractions;
using TuitionIridaFond.Persistence.Contracts.Models;

namespace TuitionFondIrida.Persistence.Mappers
{
    public class BlogMapper : IBlogMapper
    {
        private readonly IAssetMapper assetMapper;

        public BlogMapper(IAssetMapper assetMapper)
        {
            this.assetMapper = assetMapper;
        }

        public Domain.Models.Read.Blog Create(Blog blog)
        {
            return new Domain.Models.Read.Blog(blog.Title, blog.ShortDescription, assetMapper.Create(blog.Image));
        }
    }
}

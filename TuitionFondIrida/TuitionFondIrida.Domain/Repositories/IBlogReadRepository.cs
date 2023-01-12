using TuitionFondIrida.Domain.Models.Common;
using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Domain.Repositories;

public interface IBlogReadRepository
{
    Task<PageOf<Blog>> FindAllAsync(int pageNumber, string blogCategory, CancellationToken cancellationToken);
    Task<Blog> FindByIdAsync(string id, CancellationToken cancellationToken);
    Task<IList<string>> FindAllBlogsCategoriesAsync(CancellationToken cancellationToken);

}
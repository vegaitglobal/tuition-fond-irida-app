using TuitionFondIrida.Domain.Models.Common;
using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Domain.Repositories;

public interface IBlogReadRepository
{
    Task<PageOf<Blog>> FindAllAsync(int pageNumber, CancellationToken cancellationToken);
}
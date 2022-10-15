using CSharpFunctionalExtensions;
using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Domain.Repositories
{
    public interface IBlogReadRepository
    {
        Task<IEnumerable<Blog>> FindAllAsync(CancellationToken cancellationToken);
    }
}

using TuitionFondIrida.Application.Abstractions;

namespace TuitionFondIrida.Application.Blog.Queries
{
    public class FindAllBlogsQuery : IQuery<IEnumerable<Domain.Models.Read.Blog>>
    {
    }
}

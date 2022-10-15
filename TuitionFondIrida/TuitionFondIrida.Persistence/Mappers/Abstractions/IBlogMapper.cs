using TuitionIridaFond.Persistence.Contracts.Models;

namespace TuitionFondIrida.Persistence.Mappers.Abstractions
{
    public interface IBlogMapper
    {
        Domain.Models.Read.Blog Create(Blog blog);
    }
}

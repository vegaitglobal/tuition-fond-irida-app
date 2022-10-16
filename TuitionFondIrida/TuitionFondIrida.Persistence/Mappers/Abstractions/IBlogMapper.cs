using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Persistence.Mappers.Abstractions;

public interface IBlogMapper
{
    Blog Create(TuitionIridaFond.Persistence.Contracts.Models.Blog blog, string blogId);
}
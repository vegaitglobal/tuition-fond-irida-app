using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Persistence.Mappers.Abstractions;

public interface IQuizMapper
{
    Quiz Create(TuitionIridaFond.Persistence.Contracts.Models.Quiz quiz);
}
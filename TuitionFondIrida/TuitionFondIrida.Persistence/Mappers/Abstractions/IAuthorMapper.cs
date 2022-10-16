
using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Persistence.Mappers.Abstractions;

public interface IAuthorMapper {

    Author Create(TuitionIridaFond.Persistence.Contracts.Models.Author author);

}
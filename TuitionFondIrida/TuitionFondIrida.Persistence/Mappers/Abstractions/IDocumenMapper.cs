
using Contentful.Core.Models;

namespace TuitionFondIrida.Persistence.Mappers.Abstractions;

public interface IDocumenMapper {

    String MapDocument(Document document);
}
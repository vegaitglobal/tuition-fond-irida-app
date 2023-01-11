
using Contentful.Core.Models;

namespace TuitionFondIrida.Persistence.Mappers.Abstractions;

public interface IDocumentMapper {

    string Create(Document document);
}
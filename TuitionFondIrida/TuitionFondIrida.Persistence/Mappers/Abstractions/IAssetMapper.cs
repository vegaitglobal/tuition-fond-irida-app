using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Persistence.Mappers.Abstractions;

public interface IAssetMapper
{
    Asset Create(Contentful.Core.Models.Asset asset);
}
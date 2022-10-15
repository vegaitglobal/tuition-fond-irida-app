using TuitionFondIrida.Domain.Models.Read;
using TuitionFondIrida.Persistence.Mappers.Abstractions;

namespace TuitionFondIrida.Persistence.Mappers;

public class AssetMapper : IAssetMapper
{
    public Asset Create(Contentful.Core.Models.Asset asset)
    {
        var file = asset.File;
        var domainFile = new Domain.Models.Read.File(file.FileName, file.ContentType, file.Url);
        return new Asset(asset.Description, asset.Title, domainFile);
    }
}
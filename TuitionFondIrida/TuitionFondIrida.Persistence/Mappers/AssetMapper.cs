using TuitionFondIrida.Domain.Models.Read;
using TuitionFondIrida.Persistence.Mappers.Abstractions;
using File = TuitionFondIrida.Domain.Models.Read.File;

namespace TuitionFondIrida.Persistence.Mappers;

public class AssetMapper : IAssetMapper
{
    public Asset Create(Contentful.Core.Models.Asset? asset)
    {
        if (asset == null)
            return new Asset(string.Empty, string.Empty, new File(string.Empty, string.Empty, string.Empty));

        var file = asset.File;
        var domainFile = new File(file.FileName, file.ContentType, file.Url);
        return new Asset(asset.Description, asset.Title, domainFile);
    }
}
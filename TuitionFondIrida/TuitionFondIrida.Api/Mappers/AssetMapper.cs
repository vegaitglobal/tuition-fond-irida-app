using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Api.Mappers.Abstractions;
using TuitionFondIrida.Domain.Models.Contracts;

namespace TuitionFondIrida.Api.Mappers;

public class AssetMapper : IAssetMapper
{
    public AssetDto Create(IAsset asset)
    {
        var file = asset.File;
        var fileDto = new FileDto
        {
            Url = file.Url,
            ContentType = file.ContentType,
            FileName = file.FileName
        };
        return new AssetDto
        {
            Description = asset.Description,
            Title = asset.Title,
            File = fileDto
        };
    }
}
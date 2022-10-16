
using TuitionFondIrida.Domain.Models.Read;
using TuitionFondIrida.Persistence.Mappers.Abstractions;

namespace TuitionFondIrida.Persistence.Mappers;

public class AssetMapper : IAssetMapper
{
    private Contentful.Core.Models.File defaultFileImage;

    public AssetMapper(){
        defaultFileImage = new Contentful.Core.Models.File();
    }
    public Asset Create(Contentful.Core.Models.Asset asset)
    {        
        if( asset != null){
            var file =  asset.File;
            var domainFile = new Domain.Models.Read.File(file.FileName, file.ContentType, file.Url);
            return new Asset(asset.Description, asset.Title, domainFile);
        }

        return new Asset("", "", new Domain.Models.Read.File("","",""));
    }
}
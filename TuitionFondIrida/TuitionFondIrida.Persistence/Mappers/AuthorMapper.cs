using TuitionFondIrida.Domain.Models.Read;
using TuitionFondIrida.Persistence.Mappers.Abstractions;

namespace TuitionFondIrida.Persistence.Mappers;

public class AuthorMapper : IAuthorMapper
{
    private readonly IAssetMapper assetMapper;

    public AuthorMapper(IAssetMapper assetMapper)
    {
        this.assetMapper = assetMapper;
    }

    public Author Create(TuitionIridaFond.Persistence.Contracts.Models.Author author)
    {
        var picture = this.assetMapper.Create(author.Picture);
        return new Author(author.Name, picture);
    }
}
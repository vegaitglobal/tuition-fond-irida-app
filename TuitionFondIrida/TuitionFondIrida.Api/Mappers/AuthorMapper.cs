using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Api.Mappers.Abstractions;
using TuitionFondIrida.Domain.Models.Contracts;

namespace TuitionFondIrida.Api.Mappers;

public class AuthorMapper : IAuthorMapper
{
    private readonly IAssetMapper assetMapper;
    public AuthorMapper(IAssetMapper assetMapper){
        this.assetMapper = assetMapper;
    }

    public AuthorDto Create(IAuthor author)
    {
       return new AuthorDto 
       {
            Name = author.Name,
            Picture =  this.assetMapper.Create(author.Picture)
        };
    }
}
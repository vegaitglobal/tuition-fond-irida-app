using TuitionFondIrida.Domain.Models.Contracts;

namespace TuitionFondIrida.Domain.Models.Read;

public class Author : IAuthor
{
    public Author(string name, IAsset picture)
    {
        this.Name = name;
        this.Picture = picture;
    }

    public string Name { get; }

    public IAsset Picture { get; }
}
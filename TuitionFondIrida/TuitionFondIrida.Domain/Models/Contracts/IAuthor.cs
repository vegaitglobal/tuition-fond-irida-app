namespace TuitionFondIrida.Domain.Models.Contracts;

public interface IAuthor 
{
    string Name { get; }

    IAsset Picture { get; }

}
namespace TuitionFondIrida.Domain.Models.Contracts;

public interface IProduct
{
    string Title { get; }

    string Description { get; }

    IEnumerable<string> Sizes { get; }

    IAsset Image { get; }
}
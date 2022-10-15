namespace TuitionFondIrida.Domain.Models.Contracts;

public interface IAsset
{
    string Description { get; }

    string Title { get; }

    IFile File { get; }
}
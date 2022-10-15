using TuitionFondIrida.Domain.Models.Contracts;

namespace TuitionFondIrida.Domain.Models.Read;

public class Asset : IAsset
{
    public Asset(string description, string title, IFile file)
    {
        this.Description = description;
        this.Title = title;
        this.File = file;
    }

    public string Description { get; }

    public string Title { get; }

    public IFile File { get; }
}